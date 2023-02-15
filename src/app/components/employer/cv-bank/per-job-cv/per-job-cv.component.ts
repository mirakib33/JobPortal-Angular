import { Component, OnInit } from '@angular/core';
import { PerJobPost } from 'src/app/models/employer/per-job-post.model';
import { PerPostedJobsService } from 'src/app/services/employer/per-posted-jobs.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-per-job-cv',
  templateUrl: './per-job-cv.component.html',
  styleUrls: ['./per-job-cv.component.scss']
})
export class PerJobCvComponent implements OnInit {

  jobs: PerJobPost[] = [];

  constructor(public perPostedJobsService: PerPostedJobsService) { }

  ngOnInit(): void {
    this.perPostedJobsService.getAll().subscribe((data: PerJobPost[])=>{
      this.jobs = data;
      console.log(this.jobs);
    })  
  }

}
