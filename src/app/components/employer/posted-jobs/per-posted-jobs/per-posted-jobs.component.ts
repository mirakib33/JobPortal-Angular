import { Component, OnInit } from '@angular/core';
import { PerJobPost } from 'src/app/models/employer/per-job-post.model';
import { PerPostedJobsService } from 'src/app/services/employer/per-posted-jobs.service';

@Component({
  selector: 'app-per-posted-jobs',
  templateUrl: './per-posted-jobs.component.html',
  styleUrls: ['./per-posted-jobs.component.scss']
})
export class PerPostedJobsComponent  implements OnInit {

  jobs: PerJobPost[] = [];

  constructor(public perPostedJobsService: PerPostedJobsService) { }

  ngOnInit(): void {
    this.perPostedJobsService.getAll().subscribe((data: PerJobPost[])=>{
      this.jobs = data;
      console.log(this.jobs);
    })  
  }

}
