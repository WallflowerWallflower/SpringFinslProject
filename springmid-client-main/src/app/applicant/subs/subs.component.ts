import { Component, OnInit } from '@angular/core';
import {SubService} from '../services/sub.service';
import {Sphere} from '../../models/sphere.model';
import {AppService} from '../../services/app.service';
import {Sub} from '../../models/sub.model';

@Component({
  selector: 'app-subs',
  templateUrl: './subs.component.html',
  styleUrls: ['./subs.component.css']
})
export class SubsComponent implements OnInit {
  spheres: Sphere[] = [];
  subs: Sub[] = [];
  id = 0;
  sphereId = '';
  constructor(
    private service: AppService,
    private subService: SubService
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    console.log(JSON.parse(localStorage.getItem('user')));
    // @ts-ignore
    this.id = JSON.parse(localStorage.getItem('user')).id;
    this.service.getSpheres().subscribe(
      res => {
        this.spheres = res;
      }
    );
    this.getSubs();
  }
  getSubs(): void {
    this.subService.getByUserId(this.id).subscribe(
      res => {
        this.subs = res;
        console.log(this.subs);
      }
    );
  }
  create(): void {
    console.log(this.sphereId);
    if (this.sphereId){
      this.subService.create({sphereId: this.sphereId, userId: this.id }).subscribe(
        res => {
          this.getSubs();
        }
      );
    }
    else {
      alert('Choose');
    }
  }
  delete(id: string): void {
    this.subService.delete(id).subscribe(
      res => {
        this.getSubs();
      }
    );
  }
}
