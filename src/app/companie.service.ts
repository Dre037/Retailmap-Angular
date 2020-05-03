import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Companies } from './models/companie.model';

@Injectable({
  providedIn: 'root'
})
export class CompanieService {

  readonly url: string = environment.SERVER_HOST;

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Companies> {
    return this.http.get<Companies>(`${this.url}/companies/all`)
  }
}
