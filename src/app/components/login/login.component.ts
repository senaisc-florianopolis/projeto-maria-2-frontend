import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = new User();
  private responseLogin: any;
  public errorLogin: boolean;
  private isAuthenticated = false;
  public isLogged = false
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log(this.router)
    localStorage.setItem('isLogged', "true");
    // this.authService.login(this.user).subscribe(data =>
    //   this.responseLogin = data);
    // this.authService.getToken();
    // console.log(this.authService.getPermissions())
  }

}
