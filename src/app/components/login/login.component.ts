import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import { TokenPayload, AuthenticationService } from './authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {

  public user: User = new User();
  private responseLogin: any;
  public errorLogin: boolean;
  private isAuthenticated = false;
  public isLogged = false

  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor(private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    localStorage.setItem('isLogged', "true");
    location.reload();
    this.router.navigate(['/']);
  }

  loginGrupoIntegracao() {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    }); 
  }

}
