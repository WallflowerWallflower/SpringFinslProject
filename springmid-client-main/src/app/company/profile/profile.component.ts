import { Component, OnInit } from '@angular/core';
import {VacancyService} from '../services/vacancy.service';
import {Job} from '../../models/job.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // @ts-ignore
  jobs: Job[];
  constructor(
    private vacancyService: VacancyService,
  ) { }

  ngOnInit(): void {
    this.getJobs();
  }
  getJobs(): void {
    // @ts-ignore
    this.vacancyService.getByUserId(JSON.parse(localStorage.getItem('user')).id).subscribe(
      res => {
        console.log(res);
        this.jobs = res;
      },
      error => {
        console.log(error);
      }
    );
  }
}
