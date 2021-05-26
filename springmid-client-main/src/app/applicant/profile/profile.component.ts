import { Component, OnInit } from '@angular/core';
import {CvService} from '../services/cv.service';
import {Cv} from '../../models/cv.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // @ts-ignore
  cvs: Cv[];
  ready = false;
  constructor(
    private cvService: CvService
  ) { }

  ngOnInit(): void {
    this.getCvs();
  }
  getCvs(): void{
    // @ts-ignore
    this.cvService.getByUserId(JSON.parse(localStorage.getItem('user')).id).subscribe(
      res => {
        console.log(res);
        this.cvs = res;
        this.ready = true;
      },
      error => {
        console.log(error);
      }
    );
  }
  delete(id: string): void {
    this.cvService.delete(id).subscribe(
      res => {
        this.getCvs();
      }
    );
  }

}
