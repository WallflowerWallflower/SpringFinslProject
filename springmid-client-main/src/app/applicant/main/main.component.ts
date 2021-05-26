import { Component, OnInit } from '@angular/core';
import {Job} from '../../models/job.model';
import {VacancyService} from '../services/vacancy.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {City} from '../../models/city.model';
import {Sphere} from '../../models/sphere.model';
import {AppService} from '../../services/app.service';
import {Type} from '../../models/type.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // @ts-ignore
  jobs: Job[];

  // @ts-ignore
  form: FormGroup;
  skills: any[] = [];
  // @ts-ignore
  cities: City[];
  // @ts-ignore
  spheres: Sphere[];
  // @ts-ignore
  types: Type[];
  ready = false;
  constructor(
    private vacancyService: VacancyService,
    private fb: FormBuilder,
    private service: AppService,
  ) { }

  ngOnInit(): void {
    this.vacancyService.getJobs().subscribe(
      res => {
        console.log(res);
        this.jobs = res;
        this.ready = true;
      },
      error => {
        console.log(error);
      }
    );

    this.form = this.fb.group({
      keywords: '',
      cityId: '',
      sphereId: '',
      typeId: '',
      salary: '0',
    });
    this.service.getCities().subscribe(
      res => {
        console.log(res);
        this.cities = res;
      }
    );
    this.service.getSpheres().subscribe(
      res => {
        console.log(res);
        this.spheres = res;
      }
    );
    this.service.getTypes().subscribe(
      res => {
        console.log(res);
        this.types = res;
      }
    );
  }
  submit(): void {
    console.log(this.form.getRawValue());
    this.vacancyService.getJobsByParams(this.form.getRawValue()).subscribe(
      res => {
        console.log(res);
        this.jobs = res;
      }
    );
  }
}
