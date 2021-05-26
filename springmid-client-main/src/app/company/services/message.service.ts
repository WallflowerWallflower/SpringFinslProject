import { Injectable } from '@angular/core';
import {UrlService} from '../../url.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private MESS = UrlService.URL + '/messages';

  constructor(
    private http: HttpClient,
  ) { }
  getByResp(id: any): Observable<any> {
    return this.http.get(this.MESS + '/' + id);
  }
  create(form: any): Observable<any> {
    return this.http.post(this.MESS, form);
  }
}
