import { Injectable } from '@angular/core';
import {UrlService} from '../url.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private LOGIN = UrlService.URL + '/auth';
  private USER_BY_TOKEN = UrlService.URL + '/users/token';
  private REGISTER = UrlService.URL + '/users/register';

  // @ts-ignore
  user: User;
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }
  register(form: any): Observable<any> {
    console.log(form);
    return this.http.post(this.REGISTER, form, {observe: 'response'});
  }
  login(form: any): Observable<any> {
    console.log(form);
    return this.http.post(this.LOGIN, form, {observe: 'response'});
  }
  getUserByToken(): Observable<any> {
    return this.http.get(this.USER_BY_TOKEN);
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }
  setUser(user: User): void {
    this.user = user;
    localStorage.removeItem('user');
    localStorage.setItem('user', JSON.stringify(user));
  }
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // this.user = null;
    this.router.navigate(['/']);
  }

  isAuth(): boolean{
    return !!localStorage.getItem('user');
  }
}
