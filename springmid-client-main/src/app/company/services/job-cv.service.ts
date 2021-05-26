import { Injectable } from '@angular/core';
import {UrlService} from '../../url.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobCvService {
  private JOBCV = UrlService.URL + '/jobs/cvs';

  constructor(
    private http: HttpClient,
  ) { }
  get(id: any): Observable<any> {
    return this.http.get(this.JOBCV + '/' + id);
  }
  // getByJobId(id: any): Observable<any> {
  //   return this.http.get(this.JOBCV + '/job/' + id);
  // }
  getByUserId(): Observable<any> {
    return this.http.get(this.JOBCV + '/user');
  }
  create(form: any): Observable<any> {
    return this.http.post(this.JOBCV, form);
  }

  apply(id: any, form: any): Observable<any> {
    return this.http.put(this.JOBCV + '/' + id + '/job', form);
  }

  denial(id: any, form: any): Observable<any> {
    return this.http.put(this.JOBCV + '/' + id + '/job', form);
  }
}
