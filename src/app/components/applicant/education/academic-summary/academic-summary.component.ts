import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AcademicSummaryService } from 'src/app/services/applicant/academic-summary.service';

@Component({
  selector: 'app-academic-summary',
  templateUrl: './academic-summary.component.html',
  styleUrls: ['./academic-summary.component.scss']
})
export class AcademicSummaryComponent {

  constructor(private academicSummaryService:AcademicSummaryService, private router: Router) { }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      degree: new FormControl(''),
      subjectGroup: new FormControl(''),
      instituteBoard: new FormControl(''),
      passingYear: new FormControl(''),
      result: new FormControl(''),
      scale: new FormControl('')
    });

  }

  submit(){
    this.academicSummaryService.save(this.form.value).subscribe((res:any) => {
      this.router.navigateByUrl('/applicant/academic-summary');
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
