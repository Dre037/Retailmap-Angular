import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() storeName : string;
  @Input() address : string;
  @Input() category : string;

  constructor() { }

  ngOnInit(): void {
  }

  closeSide() {
    let sidebar = document.querySelector('.sidebar-map');
    sidebar.classList.remove('side-show');
  }

}
