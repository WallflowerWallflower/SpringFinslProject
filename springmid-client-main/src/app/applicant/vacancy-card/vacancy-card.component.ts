import {Component, Input, OnInit} from '@angular/core';
import {Job} from '../../models/job.model';
import {AuthService} from '../../services/auth.service';
import {VacancyService} from '../services/vacancy.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-vacancy-card',
  templateUrl: './vacancy-card.component.html',
  styleUrls: ['./vacancy-card.component.css']
})
export class VacancyCardComponent implements OnInit {
  @Input()
    // @ts-ignore
  job: Job;
  has = false;
  constructor(
    public auth: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.has = !!this.auth.user.jobs.find(x => x.id === this.job.id);
  }
  addFavourite(): void {
    this.userService.addFavourite(this.job.id).subscribe(
      res => {
        console.log(res);
        this.auth.setUser(res);
        this.has = !!this.auth.user.jobs.find(x => x.id === this.job.id);
      },
      error => {
        console.log(error);
      });
  }
  removeFavourite(): void {
    this.userService.removeFavourite(this.job.id).subscribe(
      res => {
        console.log(res);
        this.auth.setUser(res);
        this.has = !!this.auth.user.jobs.find(x => x.id === this.job.id);
      },
      error => {
        console.log(error);
      });
  }
}
