import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { ApplicantRoutingModule } from './applicant-routing.module';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SubsComponent } from './subs/subs.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { RespondsComponent } from './responds/responds.component';
import { AppComponent } from './layouts/app/app.component';
import { VacancyCardComponent } from './vacancy-card/vacancy-card.component';
import { VacancyDetailsComponent } from './vacancy-details/vacancy-details.component';
import { EditCvComponent } from './edit-cv/edit-cv.component';
import { SubsVacanciesComponent } from './subs-vacancies/subs-vacancies.component';
import { RespondDetailsComponent } from './respond-details/respond-details.component';


@NgModule({
  declarations: [MainComponent, ProfileComponent, HeaderComponent, SubsComponent, FavouritesComponent, RespondsComponent, AppComponent, VacancyCardComponent, VacancyDetailsComponent, EditCvComponent, SubsVacanciesComponent, RespondDetailsComponent],
  imports: [
    CommonModule,
    ApplicantRoutingModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class ApplicantModule { }
