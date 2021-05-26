import { Injectable } from '@angular/core';
import {UrlService} from '../../url.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private JOB = UrlService.URL + '/jobs';
  private BY_USER_ID = this.JOB + '/find/user/';

  constructor(
    private http: HttpClient,
    private router: Router,
    ) { }
  create(form: any): Observable<any> {
    console.log(form);
    return this.http.post(this.JOB, form);
  }

  getByUserId(id: string): Observable<any> {
    return this.http.get(this.BY_USER_ID + id);
  }
}
