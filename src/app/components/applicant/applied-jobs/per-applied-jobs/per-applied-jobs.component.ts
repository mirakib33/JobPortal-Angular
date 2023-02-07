import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PerJobCv } from 'src/app/models/employer/per-job-cv.model';
import { PerJobCvService } from 'src/app/services/employer/per-job-cv.service';

@Component({
  selector: 'app-per-applied-jobs',
  templateUrl: './per-applied-jobs.component.html',
  styleUrls: ['./per-applied-jobs.component.scss']
})
export class PerAppliedJobsComponent implements OnInit {

  userId: number = 33;
  perJobCv!: PerJobCv;

  constructor(private formBuilder:FormBuilder, private perJobCvService:PerJobCvService) {}

  ngOnInit(): void {
    this.perJobCvService.find(this.userId).subscribe((data: PerJobCv)=>{
      this.perJobCv = data;
    });
  }

}
