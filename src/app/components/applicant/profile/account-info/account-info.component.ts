import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountInfo } from 'src/app/models/applicant/account-info.model';
import { AccountInfoService } from 'src/app/services/applicant/account-info.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {

  // show hide action
  formOC = false;
  dataOC = true;
  dataClose(){
   this.formOC = true;
   this.dataOC = false;
   this.passOC = false;
  }

  formClose(){
    this.dataOC = true;
    this.formOC = false;
    this.passOC = true;
  }


  passOC = true;
  passFormOC = false;

  passFormO() {
    this.passFormOC = true;
    this.passOC = false;
    this.dataOC = false;
  }

  passFormC() {
    this.passFormOC = false;
    this.passOC = true;
    this.dataOC = true;
  }

  // show hide action


  form!: FormGroup;
  id: number = 33;
  accountInfo!: AccountInfo;

  constructor(private accountInfoService: AccountInfoService, private router: Router) {

    this.accountInfo = {
      id:0,
      firstName: '',
      lastName: '',
      email: '',
      phone: 0,
      password: '',
    }

   }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(33),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      password: new FormControl('')
    });

    this.accountInfoService.find(this.id).subscribe((data: AccountInfo)=>{
      this.accountInfo = data;
    });

  }

  
setValue(){

  this.formOC = true;
   this.dataOC = false;
   this.passOC = false;
   this.form = new FormGroup({
      id: new FormControl(33),
      firstName: new FormControl(this.accountInfo.firstName),
      lastName: new FormControl(this.accountInfo.lastName),
      email: new FormControl(this.accountInfo.email),
      phone: new FormControl(this.accountInfo.phone)
    });
}
 
  update(){
    this.accountInfoService.update(this.id, this.form.value).subscribe((res:any) => {
      this.accountInfo = res;
    })
  }

  updatePass(){
    this.accountInfoService.update(this.id, this.form.value).subscribe((res:any) => {
      this.accountInfo = res;
    })
  }

  // submit(){
  //   this.accountInfoService.save(this.form.value).subscribe((res:any) => {
  //   })
  // }

}
