import { Injectable } from '@angular/core';
import {UrlService} from '../../url.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Job} from '../../models/job.model';
import {User} from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private ADD_FAV = UrlService.URL + '/users/fav/add/';
  private REMOVE_FAV = UrlService.URL + '/users/fav/remove/';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }
  addFavourite(id: string): Observable<any> {
    return this.http.get(this.ADD_FAV + id);
  }
  removeFavourite(id: string): Observable<any> {
    return this.http.get(this.REMOVE_FAV + id);
  }
}
