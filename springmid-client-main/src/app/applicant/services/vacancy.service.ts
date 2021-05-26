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

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }
  getJobs(): Observable<any> {
    return this.http.get(this.JOB);
  }
  getBySphereId(id: any): Observable<any> {
    return this.http.get(this.JOB + '/sphere/' + id);
  }
  getJob(id: string): Observable<any> {
    return this.http.get(this.JOB + '/' + id);
  }
  getJobsByParams(form: any): Observable<any> {
    return this.http.post(this.JOB + '/filter', form);
  }
}
