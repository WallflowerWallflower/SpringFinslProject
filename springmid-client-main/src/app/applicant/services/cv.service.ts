import { Injectable } from '@angular/core';
import {UrlService} from '../../url.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private CV = UrlService.URL + '/cvs';
  constructor(
    private http: HttpClient,
  ) { }
  get(id: any): Observable<any> {
    return this.http.get(this.CV + '/' + id);
  }
  getByUserId(id: any): Observable<any> {
    return this.http.get(this.CV + '/user/' + id);
  }
  create(form: any): Observable<any> {
    return this.http.post(this.CV, form);
  }
  edit(id: any, form: any): Observable<any> {
    return this.http.put(this.CV + '/' + id, form);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(this.CV + '/' + id);
  }
}
