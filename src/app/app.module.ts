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
    ViewCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
