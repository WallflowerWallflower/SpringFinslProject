import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './main/main.component';
import {FavouritesComponent} from './favourites/favourites.component';
import {ProfileComponent} from './profile/profile.component';
import {RespondsComponent} from './responds/responds.component';
import {SubsComponent} from './subs/subs.component';
import {VacancyDetailsComponent} from './vacancy-details/vacancy-details.component';
import {EditCvComponent} from './edit-cv/edit-cv.component';
import {SubsVacanciesComponent} from './subs-vacancies/subs-vacancies.component';
import {RespondDetailsComponent} from './respond-details/respond-details.component';

const routes: Routes = [
  {
    path: 'applicant',
    children: [
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'favourites',
        component: FavouritesComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'responds',
        component: RespondsComponent
      },
      {
        path: 'responds/:id',
        component: RespondDetailsComponent
      },
      {
        path: 'subs',
        component: SubsComponent
      },
      {
        path: 'subs/vacancies/:id',
        component: SubsVacanciesComponent
      },
      {
        path: 'vacancy/:id',
        component: VacancyDetailsComponent
      },
      {
        path: 'cv/:id',
        component: EditCvComponent
      },
      {
        path: 'cv',
        component: EditCvComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantRoutingModule { }
