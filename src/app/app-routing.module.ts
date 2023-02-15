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
import { EmpDashboardComponent } from './components/employer/emp-dashboard/emp-dashboard.component';
import { JobPostComponent } from './components/employer/job-post/job-post.component';
import { JobPortalCvComponent } from './components/applicant/view-cv/job-portal-cv/job-portal-cv.component';
import { PersonalCvComponent } from './components/applicant/view-cv/personal-cv/personal-cv.component';
import { EmpAccountInfoComponent } from './components/employer/emp-profile/emp-account-info/emp-account-info.component';
import { EmpPersonalDetailsComponent } from './components/employer/emp-profile/emp-personal-details/emp-personal-details.component';
import { EmpAddressDetailsComponent } from './components/employer/emp-profile/emp-address-details/emp-address-details.component';
import { PerPostedJobsComponent } from './components/employer/posted-jobs/per-posted-jobs/per-posted-jobs.component';
import { FreePostedJobsComponent } from './components/employer/posted-jobs/free-posted-jobs/free-posted-jobs.component';
import { PerJobCvComponent } from './components/employer/cv-bank/per-job-cv/per-job-cv.component';
import { FreeJobCvComponent } from './components/employer/cv-bank/free-job-cv/free-job-cv.component';
import { PerJobPostComponent } from './components/employer/job-post/per-job-post/per-job-post.component';
import { FreeJobPostComponent } from './components/employer/job-post/free-job-post/free-job-post.component';
import { EmpBalanceComponent } from './components/employer/emp-billing/emp-balance/emp-balance.component';
import { EmpPaymentMethodComponent } from './components/employer/emp-billing/emp-payment-method/emp-payment-method.component';
import { AdDashboardComponent } from './components/admin/ad-dashboard/ad-dashboard.component';
import { AdAccountInfoComponent } from './components/admin/ad-profile/ad-account-info/ad-account-info.component';
import { AdAddressDetailsComponent } from './components/admin/ad-profile/ad-address-details/ad-address-details.component';
import { AdPersonalDetailsComponent } from './components/admin/ad-profile/ad-personal-details/ad-personal-details.component';
import { UsersComponent } from './components/admin/users/users.component';
import { JobCategoryComponent } from './components/admin/job-category/job-category.component';
import { JobListComponent } from './components/admin/job-list/job-list.component';
import { AdBalanceComponent } from './components/admin/ad-billing/ad-balance/ad-balance.component';
import { AdPaymentMethodComponent } from './components/admin/ad-billing/ad-payment-method/ad-payment-method.component';
import { FreelanceJobComponent } from './components/job/freelance-job/freelance-job.component';
import { PerJobViewComponent } from './components/job/per-job-view/per-job-view.component';
import { AdminLoginComponent } from './components/login/admin-login/admin-login.component';
import { AdminSignupComponent } from './components/signup/admin-signup/admin-signup.component';
import { PerAppliedJobsComponent } from './components/applicant/applied-jobs/per-applied-jobs/per-applied-jobs.component';
import { FreeAppliedJobsComponent } from './components/applicant/applied-jobs/free-applied-jobs/free-applied-jobs.component';
import { PerjobCvViewComponent } from './components/employer/cv-bank/perjob-cv-view/perjob-cv-view.component';

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
    path : "admin-login",
    component : AdminLoginComponent
  },
  {
    path : "signup",
    component : SignupComponent
  },
  {
    path : "admin-signup",
    component : AdminSignupComponent
  },
  {
    path : "job/:jobId/view",
    component : PerJobViewComponent
  },
  {
    path : "freelance-job",
    component : FreelanceJobComponent
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
        path : "per-applied-jobs",
        component : PerAppliedJobsComponent
      },
      {
        path : "free-applied-jobs",
        component : FreeAppliedJobsComponent
      },
      {
        path : "job-portal-cv",
        component : JobPortalCvComponent
      },
      {
        path : "personal-cv",
        component : PersonalCvComponent
      },
      {
        path : "cv/:jobId",
        component : PerjobCvViewComponent
      }

    ]
  },
  {
    path : "employer",
    component : EmployerComponent,
    children: [
      {
        path : "",
        component : EmpDashboardComponent
      },
      {
        path : "account-info",
        component : EmpAccountInfoComponent
      },
      {
        path : "personal-details",
        component : EmpPersonalDetailsComponent
      },
      {
        path : "address-details",
        component : EmpAddressDetailsComponent
      },
      {
        path : "per-posted-jobs",
        component : PerPostedJobsComponent
      },
      {
        path : "free-posted-jobs",
        component : FreePostedJobsComponent
      },
      {
        path : "per-job-cv",
        component : PerJobCvComponent
      },
      {
        path : "free-job-cv",
        component : FreeJobCvComponent
      },
      {
        path : "per-job-post",
        component : PerJobPostComponent
      },
      {
        path : "per-job-post/:jobId",
        component : PerJobPostComponent
      },
      {
        path : "free-job-post",
        component : FreeJobPostComponent
      },
      {
        path : "balance",
        component : EmpBalanceComponent
      },
      {
        path : "payment-method",
        component : EmpPaymentMethodComponent
      }
      
    ]
  },
  {
    path : "admin",
    component : AdminComponent,
    children: [
      {
        path : "",
        component : AdDashboardComponent
      },
      {
        path : "account-info",
        component : AdAccountInfoComponent
      },
      {
        path : "address-details",
        component : AdAddressDetailsComponent
      },
      {
        path : "personal-details",
        component : AdPersonalDetailsComponent
      },
      {
        path : "users",
        component : UsersComponent
      },
      {
        path : "job-category",
        component : JobCategoryComponent
      },
      {
        path : "job-list",
        component : JobListComponent
      },
      {
        path : "balance",
        component : AdBalanceComponent
      },
      {
        path : "payment-method",
        component : AdPaymentMethodComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
