import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmpAccountInfo } from 'src/app/models/employer/emp-account-info.model';
import { EmpAccountInfoService } from 'src/app/services/employer/emp-account-info.service';

@Component({
  selector: 'app-emp-account-info',
  templateUrl: './emp-account-info.component.html',
  styleUrls: ['./emp-account-info.component.scss']
})
export class EmpAccountInfoComponent {


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
  id: number = 34;
  empAccountInfo!: EmpAccountInfo;

  constructor(private empAccountInfoService: EmpAccountInfoService) {

    this.empAccountInfo = {
      id:0,
      firstName: '',
      lastName: '',
      email: '',
      phone: 0,
      companyName: '',
      designation: '',
      department: '',
      companyLocation: '',
      password: '',
    }

   }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(34),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      companyName: new FormControl(''),
      designation: new FormControl(''),
      department: new FormControl(''),
      companyLocation: new FormControl(''),
      password: new FormControl('')
    });

    this.empAccountInfoService.find(this.id).subscribe((data: EmpAccountInfo)=>{
      this.empAccountInfo = data;
    });

  }



  setValue(){
  this.formOC = true;
   this.dataOC = false;
   this.passOC = false;
   this.form = new FormGroup({
      id: new FormControl(34),
      firstName: new FormControl(this.empAccountInfo.firstName),
      lastName: new FormControl(this.empAccountInfo.lastName),
      email: new FormControl(this.empAccountInfo.email),
      phone: new FormControl(this.empAccountInfo.phone),
      companyName: new FormControl(this.empAccountInfo.companyName),
      designation: new FormControl(this.empAccountInfo.designation),
      department: new FormControl(this.empAccountInfo.department),
      companyLocation: new FormControl(this.empAccountInfo.companyLocation),
      password: new FormControl('')
    });
}
 
  update(){
    this.empAccountInfoService.update(this.id, this.form.value).subscribe((res:any) => {
      this.empAccountInfo = res;
    })
  }

  updatePass(){
    this.empAccountInfoService.update(this.id, this.form.value).subscribe((res:any) => {
      this.empAccountInfo = res;
    })
  }

}
