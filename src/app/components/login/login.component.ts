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
  message = '';

  constructor(private formBuilder:FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [''],
      password: ['']
  });

  }

  login() {
    const formValue = this.form.value
    this.loginService.login(formValue.email, formValue.password).subscribe({next: (res) => {
      console.log(res)
      localStorage.setItem('token',res.token)
      console.log(res.token)
      this.router.navigate(['/'])
    },error : (err)=>{
      this.message='Wrong username or password!!'
    }})
  }

}
