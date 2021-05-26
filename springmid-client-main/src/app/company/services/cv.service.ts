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
  private BY_USER_ID = this.CV + '/user/';

  constructor(
    private http: HttpClient,
  ) { }
  all(): Observable<any> {
    return this.http.get(this.CV);
  }
  get(id: any): Observable<any> {
    return this.http.get(this.CV + '/' + id);
  }
}
