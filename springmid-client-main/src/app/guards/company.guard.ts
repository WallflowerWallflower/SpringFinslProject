import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // @ts-ignore
    const user = JSON.parse(localStorage.getItem('user'));
    if (!this.auth.isAuth()){
      this.router.navigate(['/']);
      return false;
    }
    else if (user.roles[0].name !== 'company'){
      this.router.navigate(['/' + user.roles[0].name]);
      return false;
    }
    return true;
  }
}
