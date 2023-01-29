import { Component } from '@angular/core';
import { PerJobPost } from 'src/app/models/employer/per-job-post.model';
import { PerPostedJobsService } from 'src/app/services/employer/per-posted-jobs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  jobs: PerJobPost[] = [];

  constructor(public perPostedJobsService: PerPostedJobsService) { }

  ngOnInit(): void {
    this.perPostedJobsService.getAll().subscribe((data: PerJobPost[])=>{
      this.jobs = data;
      console.log(this.jobs);
    })  
  }

}
