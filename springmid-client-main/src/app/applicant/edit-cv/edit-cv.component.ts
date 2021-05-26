import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CvService} from '../services/cv.service';
import {Cv} from '../../models/cv.model';

@Component({
  selector: 'app-edit-cv',
  templateUrl: './edit-cv.component.html',
  styleUrls: ['./edit-cv.component.css']
})
export class EditCvComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;
  isEdit = false;
  skills: any[] = [];
  id: string | null | undefined;
  cv: Cv | undefined;
  ready = false;
  constructor(private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private cvService: CvService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.isEdit = !!this.activatedRoute.snapshot.paramMap.get('id');
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // @ts-ignore
    console.log(JSON.parse(localStorage.getItem('user')).id);
    if (this.isEdit){
      this.cvService.get(this.id).subscribe(
        res => {
          this.cv = res;
          // @ts-ignore
          // tslint:disable-next-line:max-line-length
          this.form = this.fb.group((({ name, salary, xp, description, skills, userId }) => ({ name, salary, xp, description, skills, userId }))(this.cv));
          // @ts-ignore
          this.skills = JSON.parse(this.cv?.skills);
          console.log(this.form);
          this.ready = true;
        },
        error => {
          console.log(error);
        }
      );
    }
    else {
      this.form = this.fb.group({
        name: '',
        salary: 0,
        xp: 0,
        description: '',
        skills: '',
        // @ts-ignore
        userId: JSON.parse(localStorage.getItem('user')).id
      });
      this.ready = true;
    }
  }

  addSkill(skill: any): void {
    skill = skill.trim();
    if (skill && !this.skills.includes(skill)){
      this.skills.push(skill);

    }
    console.log(JSON.stringify(this.skills));
  }
  submit(): void {
    this.form.get('skills')?.setValue(JSON.stringify(this.skills));
    if (this.isEdit) {
      this.cvService.edit(this.id, this.form.getRawValue()).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['applicant/profile']);
        },
        error => {
          console.log(error);
        }
      );
    }
    else {
      this.cvService.create(this.form.getRawValue()).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['applicant/profile']);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
