import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CompanieService } from '../companie.service';
import { element } from 'protractor';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  map: google.maps.Map;
  lat: number = 40.730610;
  lng: number = -73.935242;
  coordinates : any = new google.maps.LatLng(this.lat, this.lng);
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 15
  }
  marker : google.maps.Marker[] = [];

  infoWindow = new google.maps.InfoWindow;

  storeName : string;
  address : string;
  category : string;

  constructor(private companieServ: CompanieService) { }

  ngOnInit(): void {
    const self = this;
    this.companieServ.getCompanies().subscribe(d => {
      d.companies.forEach((element : any) => {
        let coords = new google.maps.LatLng(element.location.coordinates[0], element.location.coordinates[1])
        let marker : google.maps.Marker = new google.maps.Marker({
          position: coords,
          map: this.map
        })
        
        marker.addListener('click', function() {
          let sidebar = document.querySelector('.sidebar-map');
          sidebar.classList.add('side-show');
          self.storeName = element.name;
          self.address = element.address;
          self.category = element.category;
        })
        this.marker.push(marker);

      });
    });
  }

  ngAfterViewInit(): void {
    this.mapInitialiazer();
  }

  mapInitialiazer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.marker.forEach(element => {
      element.setMap(this.map);
    });
    this.geoLocationInitializer();
  }

  geoLocationInitializer() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.coordinates = new google.maps.LatLng(this.lat, this.lng);

          this.infoWindow.setPosition(this.coordinates);
          this.infoWindow.setContent("Localização encontrada.");
          this.infoWindow.open(this.map);
          this.map.setCenter(this.coordinates);
        },
        () => {
          handleLocationError(true, this.infoWindow, this.map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, this.infoWindow, this.map.getCenter());
    }

    const self = this;
    function handleLocationError(browserHasGeolocation : any, infoWindow : any, pos : any) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(
        browserHasGeolocation
          ? "Erro: O serviço de geolocalização falhou."
          : "Erro: Seu navegador não suporta geolocalização."
      );
      infoWindow.open(self.map);
    }
  }

}
