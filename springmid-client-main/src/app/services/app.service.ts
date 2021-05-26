import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UrlService} from '../url.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private CITY = UrlService.URL + '/cities';
  private SPHERE = UrlService.URL + '/spheres';
  private TYPE = UrlService.URL + '/types';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }
  getCities(): Observable<any> {
    return this.http.get(this.CITY);
  }
  getSpheres(): Observable<any> {
    return this.http.get(this.SPHERE);
  }
  getTypes(): Observable<any> {
    return this.http.get(this.TYPE);
  }
}
