import { Component, OnInit } from '@angular/core';
import {Job} from '../../models/job.model';
import {ActivatedRoute} from '@angular/router';
import {VacancyService} from '../services/vacancy.service';

@Component({
  selector: 'app-subs-vacancies',
  templateUrl: './subs-vacancies.component.html',
  styleUrls: ['./subs-vacancies.component.css']
})
export class SubsVacanciesComponent implements OnInit {
  jobs: Job[] = [];
  id: number | string | null = 0;
  ready = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private vacancyService: VacancyService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getJobs();
  }
  getJobs(): void {
    this.vacancyService.getBySphereId(this.id).subscribe(
      res => {
        console.log(res);
        this.jobs = res;
        this.ready = true;
      }
    );
  }

}
