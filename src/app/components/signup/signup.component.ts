import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private signupService:SignupService, private router: Router) { }

  form!: FormGroup;
  success = false;
  errMessage = ''

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',Validators.required],
      phone: ['',Validators.required],
      password: ['',Validators.required],
      userType: ['',Validators.required],
      userAgreement: ['',Validators.required]
    });

  }

  submit(){
    this.signupService.save(this.form.value).subscribe({next:() => {
      this.success = true
    },error : (err) =>{
      if(err.error.code == 11000)
        this.errMessage= 'User already exists!! Try something else.'
      else 
        this.errMessage= 'Something went wrong!!'
    }})
  }

}
