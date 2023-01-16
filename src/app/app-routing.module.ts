import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ApplicantComponent } from './components/applicant/applicant.component';
import { EmployerComponent } from './components/employer/employer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/applicant/profile/profile.component';
import { EducationComponent } from './components/applicant/education/education.component';
import { BillingComponent } from './components/applicant/billing/billing.component';
import { EmploymentComponent } from './components/applicant/employment/employment.component';
import { OthersComponent } from './components/applicant/others/others.component';
import { EmpProfileComponent } from './components/employer/emp-profile/emp-profile.component';
import { CvBankComponent } from './components/employer/cv-bank/cv-bank.component';
import { EmpBillingComponent } from './components/employer/emp-billing/emp-billing.component';
import { EmpOthersComponent } from './components/employer/emp-others/emp-others.component';
import { PostedJobsComponent } from './components/employer/posted-jobs/posted-jobs.component';

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
    component : ApplicantComponent,
    children: [
      {
        path : "profile",
        component : ProfileComponent
      },
      {
        path : "billing",
        component : BillingComponent
      },
      {
        path : "education",
        component : EducationComponent
      },
      {
        path : "employment",
        component : EmploymentComponent
      },
      {
        path : "others",
        component : OthersComponent
      }
    ]
  },
  {
    path : "employer",
    component : EmployerComponent,
    children: [
      {
        path : "profile",
        component : EmpProfileComponent
      },
      {
        path : "cv-bank",
        component : CvBankComponent
      },
      {
        path : "billing",
        component : EmpBillingComponent
      },
      {
        path : "others",
        component : EmpOthersComponent
      },
      {
        path : "posted-jobs",
        component : PostedJobsComponent
      },
      {
        path : "post-a-job",
        component : EmpProfileComponent
      }
    ]
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
