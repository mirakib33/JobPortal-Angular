import { Component, } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SignupService } from 'src/app/services/signup/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent{

  constructor(private signupService:SignupService) { }

  addForm!: FormGroup;
  // signup:Signup[];

  // ngOnInit() {
  //   this.addForm = this.formBuilder.group({
  //     id:[''],
  //     firstName:[''],
  //     lastName:[''],
  //     email:[''],
  //     phone:[''],
  //     password:[''],
  //     userType:[''],
  //   });

  //   this.signupService.getSignup().subscribe((data:Signup[]) => {
  //     this.signup = data;
  //   });
  // }

  add(){
    this.signupService.save(this.addForm.value);
  }
}
