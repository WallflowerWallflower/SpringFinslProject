import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // @ts-ignore
  form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: '',
      password: '',
    });
  }

  login(): void {
    // @ts-ignore
    const user = new User();
    this.form.disable();
    this.auth.login(this.form.getRawValue()).subscribe(
      res => {
        console.log(res);
        this.auth.setToken(res.headers.get('Authorization'));
        this.auth.getUserByToken().subscribe(
          res1 => {
            console.log(res1);
            for (const key of Object.keys(res1)) {
              if (user.hasOwnProperty(key)) {
                // @ts-ignore
                user[key] = res1[key];
              }
            }
            this.auth.setUser(user);
            this.router.navigate(['/' + user.roles[0].name]);
          },
          error => {
            console.log(error);
          }
        );
      },
      error => {
        console.log(error);
      }
    );
    this.form.enable();
  }
}
