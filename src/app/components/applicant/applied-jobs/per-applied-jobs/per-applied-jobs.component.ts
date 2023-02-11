import { Component, OnInit } from '@angular/core';
import { PerJobPost } from 'src/app/models/employer/per-job-post.model';
import { PerJobPostService } from 'src/app/services/employer/per-job-post.service';

@Component({
  selector: 'app-per-applied-jobs',
  templateUrl: './per-applied-jobs.component.html',
  styleUrls: ['./per-applied-jobs.component.scss']
})
export class PerAppliedJobsComponent implements OnInit {

  userId: number = 10;
  perJobs!: PerJobPost[];

  constructor(private perJobPostService: PerJobPostService) { }

  ngOnInit(): void {
    this.perJobPostService.getJobByUserId(this.userId).subscribe((data: PerJobPost[])=>{
      this.perJobs = data;
    });
  }


}
