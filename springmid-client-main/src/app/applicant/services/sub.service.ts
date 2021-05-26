import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlService} from '../../url.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubService {
  private SUB = UrlService.URL + '/subs';

  constructor(
    private http: HttpClient,
    ) { }
  getByUserId(id: any): Observable<any> {
    return this.http.get(this.SUB + '/user/' + id);
  }
  create(form: any): Observable<any> {
    return this.http.post(this.SUB, form);
  }
  edit(id: any, form: any): Observable<any> {
    return this.http.put(this.SUB + '/' + id, form);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(this.SUB + '/' + id);
  }
}
