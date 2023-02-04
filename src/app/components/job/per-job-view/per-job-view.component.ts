import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerJobCv } from 'src/app/models/employer/per-job-cv.model';
import { PerJobPost } from 'src/app/models/employer/per-job-post.model';
import { PerJobCvService } from 'src/app/services/employer/per-job-cv.service';
import { PerJobPostService } from 'src/app/services/employer/per-job-post.service';

@Component({
  selector: 'app-per-job-view',
  templateUrl: './per-job-view.component.html',
  styleUrls: ['./per-job-view.component.scss']
})
export class PerJobViewComponent {

  id!: number;
  job!: PerJobPost;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    private perJobCvService: PerJobCvService,
    public perJobPostService: PerJobPostService,
    private route: ActivatedRoute,
   ) { }
    

  ngOnInit(): void {
    this.id = this.route.snapshot.params['jobId'];
    this.perJobPostService.find(this.id).subscribe((data: PerJobPost)=>{
      this.job = data;
    });
  }

  userId:number = 31;
  jobId!: number;
  perJobCv!:PerJobCv;
  apply(job:PerJobPost){

    this.jobId = job.per_jobpost_id;

    this.perJobCv = {
      userId: this.userId,
      jobId: this.jobId,
      status: false
    }
    

    this.perJobCvService.save(this.perJobCv).subscribe(res=>{
      
    })
    // alert('Apply')
  }

}
