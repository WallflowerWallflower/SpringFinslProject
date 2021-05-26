import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AppService} from '../../services/app.service';
import {City} from '../../models/city.model';
import {Sphere} from '../../models/sphere.model';
import {VacancyService} from '../services/vacancy.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-add-vacancy',
  templateUrl: './add-vacancy.component.html',
  styleUrls: ['./add-vacancy.component.css']
})
export class AddVacancyComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;
  skills: any[] = [];
  // @ts-ignore
  cities: City[];
  // @ts-ignore
  spheres: Sphere[];
  // @ts-ignore
  types: Type[];
  constructor(
    private fb: FormBuilder,
    private service: AppService,
    private vacancyService: VacancyService,
    private router: Router,
    private auth: AuthService
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      salary: 0,
      cityId: '',
      sphereId: '',
      typeId: '',
      xp: 0,
      description: '',
      skills: '',
      // @ts-ignore
      userId: JSON.parse(localStorage.getItem('user')).id
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

  addSkill(skill: any): void {
    skill = skill.trim();
    if (skill && !this.skills.includes(skill)){
      this.skills.push(skill);
    }
    console.log(JSON.stringify(this.skills));
  }
  submit(): void {
    this.form.disable();
    this.form.get('skills')?.setValue(JSON.stringify(this.skills));
    console.log(this.form.getRawValue());
    this.vacancyService.create(this.form.getRawValue()).subscribe(
      res => {
        this.router.navigate(['/company/profile']);
      },
      error => {
        this.form.enable();
      }
    );
  }
}
