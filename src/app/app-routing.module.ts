import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ApplicantComponent } from './components/applicant/applicant.component';
import { EmployerComponent } from './components/employer/employer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

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
    component : EmployerComponent
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
