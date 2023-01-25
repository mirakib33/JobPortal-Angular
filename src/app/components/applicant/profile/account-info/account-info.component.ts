import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  constructor(private accountInfoService: AccountInfoService) { }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      password: new FormControl('')
    });

  }

  submit(){
    this.accountInfoService.save(this.form.value).subscribe((res:any) => {
    })
  }

}
