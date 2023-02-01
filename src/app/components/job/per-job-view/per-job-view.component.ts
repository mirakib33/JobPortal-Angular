import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerJobPost } from 'src/app/models/employer/per-job-post.model';
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
    public perJobPostService: PerJobPostService,
    private route: ActivatedRoute,
   ) { }
    

  ngOnInit(): void {
    this.id = this.route.snapshot.params['jobId'];
    this.perJobPostService.find(this.id).subscribe((data: PerJobPost)=>{
      this.job = data;
    });
  }

}
