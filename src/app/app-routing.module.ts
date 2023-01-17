import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ApplicantComponent } from './components/applicant/applicant.component';
import { EmployerComponent } from './components/employer/employer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { EmploymentComponent } from './components/applicant/employment/employment.component';
import { EmpProfileComponent } from './components/employer/emp-profile/emp-profile.component';
import { CvBankComponent } from './components/employer/cv-bank/cv-bank.component';
import { EmpBillingComponent } from './components/employer/emp-billing/emp-billing.component';
import { EmpOthersComponent } from './components/employer/emp-others/emp-others.component';
import { PostedJobsComponent } from './components/employer/posted-jobs/posted-jobs.component';
import { DashboardComponent } from './components/applicant/dashboard/dashboard.component';
import { AccountInfoComponent } from './components/applicant/profile/account-info/account-info.component';
import { AddressDetailsComponent } from './components/applicant/profile/address-details/address-details.component';
import { PersonalDetailsComponent } from './components/applicant/profile/personal-details/personal-details.component';
import { AcademicSummaryComponent } from './components/applicant/education/academic-summary/academic-summary.component';
import { SkillsComponent } from './components/applicant/others/skills/skills.component';
import { ReferencesComponent } from './components/applicant/others/references/references.component';
import { PortfolioComponent } from './components/applicant/others/portfolio/portfolio.component';
import { LanguageComponent } from './components/applicant/others/language/language.component';
import { BalanceComponent } from './components/applicant/billing/balance/balance.component';
import { PaymentMethodComponent } from './components/applicant/billing/payment-method/payment-method.component';
import { ProfessionalCertificationComponent } from './components/applicant/education/professional-certification/professional-certification.component';
import { ViewCvComponent } from './components/applicant/view-cv/view-cv.component';

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
        path : "",
        component : DashboardComponent
      },
      {
        path : "account-info",
        component : AccountInfoComponent
      },
      {
        path : "address-details",
        component : AddressDetailsComponent
      },
      {
        path : "personal-details",
        component : PersonalDetailsComponent
      },
      {
        path : "academic-summary",
        component : AcademicSummaryComponent
      },
      {
        path : "other-certificates",
        component : ProfessionalCertificationComponent
      },
      {
        path : "employment",
        component : EmploymentComponent
      },
      {
        path : "language",
        component : LanguageComponent
      },
      {
        path : "portfolio",
        component : PortfolioComponent
      },
      {
        path : "references",
        component : ReferencesComponent
      },
      {
        path : "skills",
        component : SkillsComponent
      },
      {
        path : "balance",
        component : BalanceComponent
      },
      {
        path : "payment-method",
        component : PaymentMethodComponent
      },
      {
        path : "cv",
        component : ViewCvComponent
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
