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
  formSH = false;
  dataSH = true;
  dataClose(){
   this.formSH = true;
   this.dataSH = false;
  }

  formClose(){
    this.dataSH = true;
    this.formSH = false;
  }

  formOpen(){
    this.formSH = true;
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
