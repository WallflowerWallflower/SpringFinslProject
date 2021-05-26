import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(
    private auth: AuthService,
  ) {}
  ngOnInit(): void {
    if (this.auth.isAuth()){
      // @ts-ignore
      this.auth.setUser(JSON.parse(localStorage.getItem('user')));
      console.log(this.auth.user);
    }
  }
}
