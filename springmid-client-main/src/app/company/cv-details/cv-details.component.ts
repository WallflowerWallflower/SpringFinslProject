import { Component, OnInit } from '@angular/core';
import {Cv} from '../../models/cv.model';
import {CvService} from '../services/cv.service';
import {ActivatedRoute} from '@angular/router';
import {JobCvService} from '../services/job-cv.service';
import {VacancyService} from '../services/vacancy.service';
import {Job} from '../../models/job.model';

@Component({
  selector: 'app-cv-details',
  templateUrl: './cv-details.component.html',
  styleUrls: ['./cv-details.component.css']
})
export class CvDetailsComponent implements OnInit {
  ready = false;
  // @ts-ignore
  cv: Cv;
  id: any;
  skills = [];
  jobs: Job[] = [];
  constructor(
    private cvService: CvService,
    private jobCvService: JobCvService,
    private vacancyService: VacancyService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getCv();
  }
  getCv(): void {
    this.cvService.get(this.id).subscribe(
      res => {
        console.log(res);
        this.cv = res;
        // @ts-ignore
        this.skills = JSON.parse(this.cv?.skills);
        // @ts-ignore
        this.vacancyService.getByUserId(JSON.parse(localStorage.getItem('user')).id).subscribe(
          res1 => {
            console.log(res1);
            this.jobs = res1;
            this.ready = true;
          }
        );
      }
    );
  }
  contact(jobId: any): void {
    this.jobCvService.create({jobApplied: 1, cvApplied: 0, cvId: this.cv.id, jobId}).subscribe(
      res => {
        console.log(res);
        alert('Invited!');
      }
    );
  }
}
