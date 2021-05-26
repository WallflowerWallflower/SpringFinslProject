import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {GuestGuard} from './guards/guest.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [GuestGuard]
  },
  {
    path: 'register/company',
    component: RegisterComponent,
    canActivate: [GuestGuard]
  },
  {
    path: 'register/applicant',
    component: RegisterComponent,
    canActivate: [GuestGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
