import { Component, OnInit } from '@angular/core';
import { PerJobPost } from 'src/app/models/employer/per-job-post.model';
import { PerPostedJobsService } from 'src/app/services/employer/per-posted-jobs.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-per-posted-jobs',
  templateUrl: './per-posted-jobs.component.html',
  styleUrls: ['./per-posted-jobs.component.scss']
})
export class PerPostedJobsComponent implements OnInit {

  jobs!: PerJobPost[];

  constructor(public perPostedJobsService: PerPostedJobsService) { }

  ngOnInit(): void {
    this.perPostedJobsService.getAll().subscribe((data: PerJobPost[])=>{
      this.jobs = data;
    })  
  }

  delete(perJobPost:PerJobPost){

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.perPostedJobsService.delete(perJobPost.per_jobpost_id).subscribe(data=>{this.ngOnInit();})
    //     this.perPostedJobsService.delete(id).subscribe(res => {
    //       this.jobs = this.jobs.filter(item => item.per_jobpost_id !== id);
    //  })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

}
