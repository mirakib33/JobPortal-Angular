import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BankAccount } from 'src/app/models/payment-method/bank-account.model';
import { CardDetails } from 'src/app/models/payment-method/card-details.model';
import { MobileBanking } from 'src/app/models/payment-method/mobile-banking.model';
import { BankAccountService } from 'src/app/services/payment-method/bank-account.service';
import { CardDetailsService } from 'src/app/services/payment-method/card-details.service';
import { MobileBankingService } from 'src/app/services/payment-method/mobile-banking.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent {

  form!: FormGroup;
  id!: number;
  bankAccount!: BankAccount[];
  mobileBanking!: MobileBanking[];
  cardDetails!: CardDetails[];


  constructor(
    private formBuilder:FormBuilder,
    private bankAccountService:BankAccountService,
    private mobileBankingService:MobileBankingService,
    private cardDetailsService:CardDetailsService) { }

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
      userId: ['']
    });

    this.form = this.formBuilder.group({
      id: [''],
      type: [''],
      accountName: [''],
      accountNumber: [''],
      userId: ['']
    });

    this.form = this.formBuilder.group({
      id: [''],
      cardNumber: [''],
      accountName: [''],
      ccv: [''],
      expirationDate: [''],
      userId: ['']
    });

 
    this.bankAccountService.getAll().subscribe((data: BankAccount[])=>{
      this.bankAccount = data;
    })

    this.mobileBankingService.getAll().subscribe((data: MobileBanking[])=>{
      this.mobileBanking = data;
    })

    this.cardDetailsService.getAll().subscribe((data: CardDetails[])=>{
      this.cardDetails = data;
    })
  }

  submit(){
    this.bankAccountService.save(this.form.value).subscribe(data=>{this.ngOnInit();})
   }

  submitMB(){
    this.mobileBankingService.save(this.form.value).subscribe(data=>{this.ngOnInit();})
   }

  submitCD(){
    this.cardDetailsService.save(this.form.value).subscribe(data=>{this.ngOnInit();})
   }

  update(){
    this.bankAccountService.update(this.id, this.form.value).subscribe((res:any) => {
    })
  }

  updateMB(){
    this.mobileBankingService.update(this.id, this.form.value).subscribe((res:any) => {
    })
  }

  updateCD(){
    this.cardDetailsService.update(this.id, this.form.value).subscribe((res:any) => {
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

  deleteMB(mobileBanking:MobileBanking){

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
        this.mobileBankingService.delete(mobileBanking.id).subscribe(data=>{this.ngOnInit();})
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

  deleteCD(cardDetails:CardDetails){

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
        this.cardDetailsService.delete(cardDetails.id).subscribe(data=>{this.ngOnInit();})
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

  setValueMB(mobileBanking:MobileBanking): void {
    localStorage.setItem('getMBankId', mobileBanking.id.toString());
    let mBankId = localStorage.getItem('getMBankId');
    
    if(+mBankId! > 0){
      this.mobileBankingService.find(+mBankId!).subscribe(data => {
        this.form.patchValue(data);
    })
    }  
  }

  setValueCD(cardDetails:CardDetails): void {
    localStorage.setItem('getCardId', cardDetails.id.toString());
    let cardId = localStorage.getItem('getCardId');
    
    if(+cardId! > 0){
      this.cardDetailsService.find(+cardId!).subscribe(data => {
        this.form.patchValue(data);
    })
    }  
  }

}
