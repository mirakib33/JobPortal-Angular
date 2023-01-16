import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './myComponents/admin/admin.component';
import { ApplicantComponent } from './myComponents/applicant/applicant.component';
import { HomeComponent } from './myComponents/home/home.component';
import { LoginComponent } from './myComponents/login/login.component';
import { SignupComponent } from './myComponents/signup/signup.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "signup",
    component : SignupComponent
  },
  {
    path : "applicant",
    component : ApplicantComponent
  },
  {
    path : "employer",
    component : ApplicantComponent
  },
  {
    path : "admin",
    component : AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
