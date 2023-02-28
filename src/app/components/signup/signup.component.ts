import { Role } from './../../models/role.model';
import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Signup } from 'src/app/models/signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  form!: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      userType: ['', Validators.required],
      userAgreement: [false, Validators.requiredTrue],
      role: []
    });

  }
  roles: Role []= [];

  onSubmit(): void {
    console.log(this.form.value);
    this.roles.push({roleName:this.form.value.role})

    const signup: Signup = {
      firstName: this.form.value['firstName'],
      lastName: this.form.value['lastName'],
      email: this.form.value['email'],
      phone: this.form.value['phone'],
      password: this.form.value['password'],
      userType: this.form.value['userType'],
      userAgreement: this.form.value['userAgreement'],
      role: this.roles
    };

    this.authService.register(signup).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigateByUrl('/');
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
