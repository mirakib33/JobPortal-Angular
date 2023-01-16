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
import { FlexLayoutModule } from "@angular/flex-layout";
import { HeaderComponent } from './myComponents/common/header/header.component';
import { FooterComponent } from './myComponents/common/footer/footer.component';
import { ApplicantComponent } from './myComponents/applicant/applicant.component';
import { AdminComponent } from './myComponents/admin/admin.component';
import { EmployerComponent } from './myComponents/employer/employer.component';
import { HomeComponent } from './myComponents/home/home.component';
import { FreelanceJobComponent } from './myComponents/job/freelance-job/freelance-job.component';
import { FreelanceJobCategoryComponent } from './myComponents/job/freelance-job-category/freelance-job-category.component';
import { PermanentJobCategoryComponent } from './myComponents/job/permanent-job-category/permanent-job-category.component';
import { PermanentJobComponent } from './myComponents/job/permanent-job/permanent-job.component';
import { LoginComponent } from './myComponents/login/login.component';
import { SignupComponent } from './myComponents/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ApplicantComponent,
    AdminComponent,
    EmployerComponent,
    HomeComponent,
    FreelanceJobComponent,
    FreelanceJobCategoryComponent,
    PermanentJobCategoryComponent,
    PermanentJobComponent,
    LoginComponent,
    SignupComponent,
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
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
