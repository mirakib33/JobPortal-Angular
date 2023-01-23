import { Component, OnInit, } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private signupService:SignupService) { }

  form!: FormGroup;
  // signup!:Signup[];

  // ngOnInit(): void {
  //   this.form = new FormGroup({
  //     title: new FormControl('', [Validators.required]),
  //     body: new FormControl('', Validators.required)
  //     ,
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

  submit(){
    this.signupService.save(this.form.value).subscribe((res:any) => {
      console.log('Post created successfully!');
    })
  }
}
