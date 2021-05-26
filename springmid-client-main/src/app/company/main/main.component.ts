import { Component, OnInit } from '@angular/core';
import {Cv} from '../../models/cv.model';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  ready = false;
  cvs: Cv[] = [];
  constructor(
    private cvService: CvService
  ) { }

  ngOnInit(): void {
    this.getCvs();
  }
  getCvs(): void {
    this.cvService.all().subscribe(
      res => {
        console.log(res);
        this.cvs = res;
        this.ready = true;
      }
    );
  }
}
