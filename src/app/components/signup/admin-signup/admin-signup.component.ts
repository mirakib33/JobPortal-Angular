import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminSignupService } from 'src/app/services/admin-signup.service';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.scss']
})
export class AdminSignupComponent {

  constructor(private signupService:SignupService, private router: Router) { }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      password: new FormControl(''),
      userAgreement: new FormControl('')
    });

  }

  submit(){
    this.signupService.save(this.form.value).subscribe((res:any) => {
      this.router.navigateByUrl('/admin-signup');
    })
  }

}
