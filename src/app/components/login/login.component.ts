import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Signup } from './../../models/signup.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  authError: String = '';

  constructor(private formBuilder:FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [''],
      password: ['']
  });

  }

  login(signup:Signup) {
    this.loginService.login(signup);
  }

}
