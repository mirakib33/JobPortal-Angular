import { Component } from '@angular/core';
import { JobCategory } from 'src/app/models/admin/job-category.model';
import { PerJobPost } from 'src/app/models/employer/per-job-post.model';
import { JobCategoryService } from 'src/app/services/admin/job-category.service';
import { PerPostedJobsService } from 'src/app/services/employer/per-posted-jobs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  jobs: PerJobPost[] = [];
  jobCategory!: JobCategory[];

  constructor(public perPostedJobsService: PerPostedJobsService, private jobCategoryService:JobCategoryService) { }

  ngOnInit(): void {
    this.perPostedJobsService.getAll().subscribe((data: PerJobPost[])=>{
      this.jobs = data;
    })

    this.jobCategoryService.getAll().subscribe((data: JobCategory[])=>{
      this.jobCategory = data;
    })

  }

}
