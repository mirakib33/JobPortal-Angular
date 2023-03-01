import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AcademicSummary } from 'src/app/models/applicant/academic-summary.model';
import { AcademicSummaryService } from 'src/app/services/applicant/academic-summary.service';

@Component({
  selector: 'app-academic-summary',
  templateUrl: './academic-summary.component.html',
  styleUrls: ['./academic-summary.component.scss']
})
export class AcademicSummaryComponent {

  form!: FormGroup;
  id: number = this.tokenStorageService.getUser().user.user_id;
  userId: number = 2;
  academicSummary: AcademicSummary;
  academicSummaries: AcademicSummary[] = [];
  constructor(private academicSummaryService:AcademicSummaryService, private router: Router, private tokenStorageService:TokenStorageService) { 

    this.academicSummary = {
      id:0,
      degree: '',
      subjectGroup: '',
      instituteBoard: '',
      passingYear: '',
      result: 0.0,
      scale: '',
      userId: 2
    }

  }


  ngOnInit(): void {
    this.form = new FormGroup({
      degree: new FormControl(''),
      subjectGroup: new FormControl(''),
      instituteBoard: new FormControl(''),
      passingYear: new FormControl(''),
      result: new FormControl(0.0),
      scale: new FormControl(''),
      userId: new FormControl(2)
    });

    this.academicSummaryService.find(this.id).subscribe((data: AcademicSummary)=>{
      this.academicSummary = data;
    });

    this.academicSummaryService.getAll().subscribe((data: AcademicSummary[])=>{
      this.academicSummaries = data;
    })

  }

  
  submit(){
   
    this.academicSummaryService.save(this.form.value).subscribe((res:any) => {
      this.router.navigateByUrl('/applicant/academic-summary');
    })
  }

  update(){
    this.academicSummaryService.update(this.id, this.form.value).subscribe((res:any) => {
         this.router.navigateByUrl('applicant/academic-summary');
    })
  }

  updateByUserId(){
    console.log("Be Subbmit called---");
    this.academicSummaryService.updateByUserId(this.userId, this.form.value).subscribe((res:any) => {
      this.academicSummary = res;
      this.router.navigateByUrl('applicant/academic-summary');
    })
  }

  deletePost(id:number){
    this.academicSummaryService.delete(id).subscribe(res => {
         this.academicSummaries = this.academicSummaries.filter(item => item.id !== id);
    })
  }



  
  formOC = false;
  dataOC = true;
  dataClose(){
   this.formOC = true;
   this.dataOC = false;
  }

  formClose(){
    this.dataOC = true;
    this.formOC = false;
  }

  formOpen(){
    this.formOC = true;
  }

}
