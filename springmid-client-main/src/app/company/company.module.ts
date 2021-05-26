import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { CompanyRoutingModule } from './company-routing.module';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './layouts/header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { AddVacancyComponent } from './add-vacancy/add-vacancy.component';
import { RespondsComponent } from './responds/responds.component';
import { RespondDetailsComponent } from './respond-details/respond-details.component';
import { CvDetailsComponent } from './cv-details/cv-details.component';


@NgModule({
  declarations: [MainComponent, HeaderComponent, ProfileComponent, AddVacancyComponent, RespondsComponent, RespondDetailsComponent, CvDetailsComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CompanyModule { }
