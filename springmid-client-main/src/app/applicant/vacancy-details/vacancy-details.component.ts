import { Component, OnInit } from '@angular/core';
import {VacancyService} from '../services/vacancy.service';
import {ActivatedRoute, RouterLinkActive} from '@angular/router';
import {Job} from '../../models/job.model';
import {JobCvService} from '../services/job-cv.service';
import {Cv} from '../../models/cv.model';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-vacancy-details',
  templateUrl: './vacancy-details.component.html',
  styleUrls: ['./vacancy-details.component.css']
})
export class VacancyDetailsComponent implements OnInit {
  id: any;
  cvs: Cv[] = [];
  // @ts-ignore
  job: Job;
  skills = [];
  ready = false;
  constructor(
    private vacancyService: VacancyService,
    private jobCvService: JobCvService,
    private cvService: CvService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getJob();
  }
  getJob(): void {
    this.vacancyService.getJob(this.id).subscribe(
      res => {
        console.log(res);
        this.job = res;
        this.skills = JSON.parse(this.job.skills);
        console.log(this.skills);
        // @ts-ignore
        this.cvService.getByUserId(JSON.parse(localStorage.getItem('user')).id).subscribe(
          res1 => {
            console.log(res1);
            this.cvs = res1;
            this.ready = true;
          }
        );
      },
      error => {
        console.log(error);
      }
    );
  }
  contact(cvId: any): void {
    this.jobCvService.create({jobApplied: 0, cvApplied: 1, cvId, jobId: this.job.id}).subscribe(
      res => {
        console.log(res);
        alert('Invited!');
      }
    );
  }

}
