import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BankAccount } from 'src/app/models/payment-method/bank-account.model';
import { BankAccountService } from 'src/app/services/payment-method/bank-account.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ad-payment-method',
  templateUrl: './ad-payment-method.component.html',
  styleUrls: ['./ad-payment-method.component.scss']
})
export class AdPaymentMethodComponent {

  form!: FormGroup;
  id!: number;
  bankAccount!: BankAccount[];

  constructor(private formBuilder:FormBuilder, private bankAccountService:BankAccountService) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      id: [''],
      ibanNumber: [''],
    postCode: [''],
    accountType:  [''],
    branchName: [''],
    branchAddress: [''],
    birthDate: [''],
    firstName: [''],
    lastName: [''],
    accountName: [''],
    address: [''],
    country: [''],
    city: [''],
    phoneNumber: [''],
    userId: [''],
    });

 
    this.bankAccountService.getAll().subscribe((data: BankAccount[])=>{
      this.bankAccount = data;
    })
  }

  submit(){
    this.bankAccountService.save(this.form.value).subscribe(data=>{this.ngOnInit();})
   }

   update(){
    this.bankAccountService.update(this.id, this.form.value).subscribe((res:any) => {
    })
  }

  delete(bankAccount:BankAccount){

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.bankAccountService.delete(bankAccount.id).subscribe(data=>{this.ngOnInit();})
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: "Your file has been deleted!",
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }


  setValue(bankAccount:BankAccount): void {
    localStorage.setItem('getBankId', bankAccount.id.toString());
    let bankId = localStorage.getItem('getBankId');
    
    if(+bankId! > 0){
      this.bankAccountService.find(+bankId!).subscribe(data => {
        this.form.patchValue(data);
    })
    }
     
  }

}
