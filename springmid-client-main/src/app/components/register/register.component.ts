import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Applicant} from '../../models/applicant.model';
import {User} from '../../models/user.model';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;
  forApplicant = false;

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    public router: Router) {
  }

  ngOnInit(): void {
    this.forApplicant = this.router.url === '/register/applicant';
    if (this.forApplicant){
      this.form = this.fb.group({
        name: '',
        username: '',
        phone: '',
        password: '',
        password_confirmation: ''
      });
    }
    else {
      this.form = this.fb.group({
        name: '',
        username: '',
        password: '',
        password_confirmation: ''
      });
    }
  }

  register(): void{
    // @ts-ignore
    const user = new User();
    this.form.disable();
    this.auth.register(this.form.getRawValue()).subscribe(
      res => {
        console.log(res);
        for (const key of Object.keys(res.body)) {
          if (user.hasOwnProperty(key)) { // or obj1.hasOwnProperty(key)
            // @ts-ignore
            user[key] = res.body[key];
          }
        }
        this.auth.setToken(res.headers.get('Authorization'));
        this.auth.setUser(user);
        console.log(user);
        this.router.navigate(['/' + user.roles[0].name]);
      },
      error => {
        alert('Error');
      }
    );
    this.form.enable();
  }
}
