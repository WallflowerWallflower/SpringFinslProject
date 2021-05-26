import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './main/main.component';
import {ProfileComponent} from './profile/profile.component';
import {RespondsComponent} from './responds/responds.component';
import {AddVacancyComponent} from './add-vacancy/add-vacancy.component';
import {RespondDetailsComponent} from './respond-details/respond-details.component';
import {CvDetailsComponent} from './cv-details/cv-details.component';
import {CompanyGuard} from '../guards/company.guard';

const routes: Routes = [
  {
    path: 'company',
    children: [
      {
        path: '',
        component: MainComponent,
        canActivate: [CompanyGuard]
      },
      {
        path: 'vacancy',
        component: AddVacancyComponent,
        canActivate: [CompanyGuard]
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [CompanyGuard]
      },
      {
        path: 'responds',
        component: RespondsComponent,
        canActivate: [CompanyGuard]
      },
      {
        path: 'responds/:id',
        component: RespondDetailsComponent,
        canActivate: [CompanyGuard]
      },
      {
        path: 'cv/:id',
        component: CvDetailsComponent,
        canActivate: [CompanyGuard]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
