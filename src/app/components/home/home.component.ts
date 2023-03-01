import { Component, OnInit } from '@angular/core';
import { JobCategory } from 'src/app/models/admin/job-category.model';
import { PerJobPost } from 'src/app/models/employer/per-job-post.model';
import { PerPostedJobsService } from 'src/app/services/employer/per-posted-jobs.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jobs: PerJobPost[] = [];
  jobCategory!: JobCategory[];

  constructor(public perPostedJobsService: PerPostedJobsService, private homeService:HomeService) { }

  ngOnInit(): void {
    this.perPostedJobsService.getAll().subscribe((data: PerJobPost[])=>{
      this.jobs = data;
    })

    this.homeService.getAll().subscribe((data: JobCategory[])=>{
      this.jobCategory = data;
    })

  }

}
