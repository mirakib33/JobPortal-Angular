import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Signup } from './../../models/signup.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signup: Signup = new Signup();
  errorMessage!: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.signup).subscribe(
      (signup) => {
        switch (signup.userType) {
          case 'Admin':
            this.router.navigate(['/admin']);
            break;
          case 'Employer':
            this.router.navigate(['/employer']);
            break;
          case 'Applicant':
            this.router.navigate(['/applicant']);
            break;
          default:
            this.errorMessage = 'Invalid user role';
            break;
        }
      },
      (error) => {
        this.errorMessage = 'Invalid username or password';
      }
    );
  }

}
