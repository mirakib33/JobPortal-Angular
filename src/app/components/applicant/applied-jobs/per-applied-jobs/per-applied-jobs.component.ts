import { Component, OnInit } from '@angular/core';
import { PerAppliedJobs } from 'src/app/models/applicant/per-applied-jobs.model';
import { PerJobCv } from 'src/app/models/employer/per-job-cv.model';
import { PerJobPost } from 'src/app/models/employer/per-job-post.model';
import { PerAppliedJobsService } from 'src/app/services/applicant/per-applied-jobs.service';
import { PerJobCvService } from 'src/app/services/employer/per-job-cv.service';
import { PerJobPostService } from 'src/app/services/employer/per-job-post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-per-applied-jobs',
  templateUrl: './per-applied-jobs.component.html',
  styleUrls: ['./per-applied-jobs.component.scss']
})
export class PerAppliedJobsComponent implements OnInit {

  userId: number = 31;
  perAppliedJobs!: PerAppliedJobs[];

  constructor(private perAppliedJobsService: PerAppliedJobsService, private perJobCvService: PerJobCvService) { }

  ngOnInit(): void {
    this.perAppliedJobsService.getJobByUserId(this.userId).subscribe((data: PerAppliedJobs[])=>{
      this.perAppliedJobs = data;
      console.log('De;List Data-',this.perAppliedJobs);

    });
  }


  delete(perAppliedJobs:PerAppliedJobs){

    Swal.fire({
      title: 'Are you sure?',
      text: "You need to apply again to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, undo it!'
    }).then((result) => {
      if (result.isConfirmed) {

        console.log('De;edfhnsdhn-',perAppliedJobs);
        this.perJobCvService.delete(perAppliedJobs.perjob_cv_id).subscribe(data=>{this.ngOnInit();})

        Swal.fire(
          'Undo Completed!',
          'Your job has been undone.',
          'success'
        )
      }
    })
  }


}
