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
    PermanentJobComponent
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
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
