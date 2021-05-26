import { Component, OnInit } from '@angular/core';
import {JobCvService} from '../services/job-cv.service';
import {JobCv} from '../../models/job-cv.model';

@Component({
  selector: 'app-responds',
  templateUrl: './responds.component.html',
  styleUrls: ['./responds.component.css']
})
export class RespondsComponent implements OnInit {
  id = '0';
  jobCvs: JobCv[] = [];
  ready = false;

  constructor(
    private jobCvService: JobCvService,
  ) { }

  ngOnInit(): void {
    this.getResponds();
  }
  getResponds(): void {
    this.jobCvService.getByUserId().subscribe(
    res => {
      console.log(res);
      this.jobCvs = res;
      this.ready = true;
    });
  }
  apply(id: any): void {
    this.jobCvService.apply(id, {job: '1'}).subscribe(
      res => {
        console.log(res);
        this.getResponds();
      }
    );
  }
  denial(id: any): void {
    this.jobCvService.denial(id, {job: '-1'}).subscribe(
      res => {
        console.log(res);
        this.getResponds();
      }
    );
  }
}
