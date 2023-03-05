import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';

import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ApplicantComponent } from './components/applicant/applicant.component';
import { EmployerComponent } from './components/employer/employer.component';
import { AdminComponent } from './components/admin/admin.component';
import { FreelanceJobComponent } from './components/job/freelance-job/freelance-job.component';
import { FreelanceJobCategoryComponent } from './components/job/freelance-job-category/freelance-job-category.component';
import { PermanentJobCategoryComponent } from './components/job/permanent-job-category/permanent-job-category.component';
import { PermanentJobComponent } from './components/job/permanent-job/permanent-job.component';
import { AccountInfoComponent } from './components/applicant/profile/account-info/account-info.component';
import { PersonalDetailsComponent } from './components/applicant/profile/personal-details/personal-details.component';
import { AddressDetailsComponent } from './components/applicant/profile/address-details/address-details.component';
import { AcademicSummaryComponent } from './components/applicant/education/academic-summary/academic-summary.component';
import { ProfessionalCertificationComponent } from './components/applicant/education/professional-certification/professional-certification.component';
import { SkillsComponent } from './components/applicant/others/skills/skills.component';
import { PortfolioComponent } from './components/applicant/others/portfolio/portfolio.component';
import { LanguageComponent } from './components/applicant/others/language/language.component';
import { ReferencesComponent } from './components/applicant/others/references/references.component';
import { BalanceComponent } from './components/applicant/billing/balance/balance.component';
import { PaymentMethodComponent } from './components/applicant/billing/payment-method/payment-method.component';
import { ProfileComponent } from './components/applicant/profile/profile.component';
import { BillingComponent } from './components/applicant/billing/billing.component';
import { EducationComponent } from './components/applicant/education/education.component';
import { EmploymentComponent } from './components/applicant/employment/employment.component';
import { OthersComponent } from './components/applicant/others/others.component';
import { PostedJobsComponent } from './components/employer/posted-jobs/posted-jobs.component';
import { CvBankComponent } from './components/employer/cv-bank/cv-bank.component';
import { EmpProfileComponent } from './components/employer/emp-profile/emp-profile.component';
import { EmpOthersComponent } from './components/employer/emp-others/emp-others.component';
import { EmpBillingComponent } from './components/employer/emp-billing/emp-billing.component';
import { DashboardComponent } from './components/applicant/dashboard/dashboard.component';
import { EmpDashboardComponent } from './components/employer/emp-dashboard/emp-dashboard.component';
import { AdDashboardComponent } from './components/admin/ad-dashboard/ad-dashboard.component';
import { ViewCvComponent } from './components/applicant/view-cv/view-cv.component';
import { JobPostComponent } from './components/employer/job-post/job-post.component';
import { JobPortalCvComponent } from './components/applicant/view-cv/job-portal-cv/job-portal-cv.component';
import { PersonalCvComponent } from './components/applicant/view-cv/personal-cv/personal-cv.component';
import { EmpPersonalDetailsComponent } from './components/employer/emp-profile/emp-personal-details/emp-personal-details.component';
import { EmpAddressDetailsComponent } from './components/employer/emp-profile/emp-address-details/emp-address-details.component';
import { PerJobCvComponent } from './components/employer/cv-bank/per-job-cv/per-job-cv.component';
import { FreeJobCvComponent } from './components/employer/cv-bank/free-job-cv/free-job-cv.component';
import { EmpBalanceComponent } from './components/employer/emp-billing/emp-balance/emp-balance.component';
import { EmpPaymentMethodComponent } from './components/employer/emp-billing/emp-payment-method/emp-payment-method.component';
import { PerJobPostComponent } from './components/employer/job-post/per-job-post/per-job-post.component';
import { FreeJobPostComponent } from './components/employer/job-post/free-job-post/free-job-post.component';
import { PerPostedJobsComponent } from './components/employer/posted-jobs/per-posted-jobs/per-posted-jobs.component';
import { FreePostedJobsComponent } from './components/employer/posted-jobs/free-posted-jobs/free-posted-jobs.component';
import { EmpAccountInfoComponent } from './components/employer/emp-profile/emp-account-info/emp-account-info.component';
import { AdProfileComponent } from './components/admin/ad-profile/ad-profile.component';
import { AdAccountInfoComponent } from './components/admin/ad-profile/ad-account-info/ad-account-info.component';
import { AdAddressDetailsComponent } from './components/admin/ad-profile/ad-address-details/ad-address-details.component';
import { AdPersonalDetailsComponent } from './components/admin/ad-profile/ad-personal-details/ad-personal-details.component';
import { AdBillingComponent } from './components/admin/ad-billing/ad-billing.component';
import { AdBalanceComponent } from './components/admin/ad-billing/ad-balance/ad-balance.component';
import { AdPaymentMethodComponent } from './components/admin/ad-billing/ad-payment-method/ad-payment-method.component';
import { UsersComponent } from './components/admin/users/users.component';
import { JobCategoryComponent } from './components/admin/job-category/job-category.component';
import { JobListComponent } from './components/admin/job-list/job-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PerJobViewComponent } from './components/job/per-job-view/per-job-view.component';
import { AdminLoginComponent } from './components/login/admin-login/admin-login.component';
import { AdminSignupComponent } from './components/signup/admin-signup/admin-signup.component';
import { FreeAppliedJobsComponent } from './components/applicant/applied-jobs/free-applied-jobs/free-applied-jobs.component';
import { PerAppliedJobsComponent } from './components/applicant/applied-jobs/per-applied-jobs/per-applied-jobs.component';
import { PerjobCvViewComponent } from './components/employer/cv-bank/perjob-cv-view/perjob-cv-view.component';
import { FreejobCvViewComponent } from './components/employer/cv-bank/freejob-cv-view/freejob-cv-view.component';
import { AuthInterceptor, authInterceptorProviders } from './auth/helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    ApplicantComponent,
    EmployerComponent,
    AdminComponent,
    FreelanceJobComponent,
    FreelanceJobCategoryComponent,
    PermanentJobCategoryComponent,
    PermanentJobComponent,
    AccountInfoComponent,
    PersonalDetailsComponent,
    AddressDetailsComponent,
    AcademicSummaryComponent,
    ProfessionalCertificationComponent,
    SkillsComponent,
    PortfolioComponent,
    LanguageComponent,
    ReferencesComponent,
    BalanceComponent,
    PaymentMethodComponent,
    ProfileComponent,
    BillingComponent,
    EducationComponent,
    EmploymentComponent,
    OthersComponent,
    PostedJobsComponent,
    CvBankComponent,
    EmpProfileComponent,
    EmpOthersComponent,
    EmpBillingComponent,
    DashboardComponent,
    EmpDashboardComponent,
    AdDashboardComponent,
    ViewCvComponent,
    JobPostComponent,
    JobPortalCvComponent,
    PersonalCvComponent,
    EmpPersonalDetailsComponent,
    EmpAddressDetailsComponent,
    PerJobCvComponent,
    FreeJobCvComponent,
    EmpBalanceComponent,
    EmpPaymentMethodComponent,
    PerJobPostComponent,
    FreeJobPostComponent,
    PerPostedJobsComponent,
    FreePostedJobsComponent,
    EmpAccountInfoComponent,
    AdProfileComponent,
    AdAccountInfoComponent,
    AdAddressDetailsComponent,
    AdPersonalDetailsComponent,
    AdBillingComponent,
    AdBalanceComponent,
    AdPaymentMethodComponent,
    UsersComponent,
    JobCategoryComponent,
    JobListComponent,
    PerJobViewComponent,
    AdminLoginComponent,
    AdminSignupComponent,
    FreeAppliedJobsComponent,
    PerAppliedJobsComponent,
    PerjobCvViewComponent,
    FreejobCvViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatExpansionModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
