import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobCategory } from 'src/app/models/admin/job-category.model';
import { PerJobPost } from 'src/app/models/employer/per-job-post.model';
import { JobCategoryService } from 'src/app/services/admin/job-category.service';
import { PerJobPostService } from 'src/app/services/employer/per-job-post.service';

@Component({
  selector: 'app-per-job-post',
  templateUrl: './per-job-post.component.html',
  styleUrls: ['./per-job-post.component.scss']
})
export class PerJobPostComponent {

  form!: FormGroup;
  id!: number;
  // userId: number = 2;
  perJobPost!: PerJobPost;
  // perJobPosts: PerJobPost[] = [];

  jobCategory!: JobCategory[];
  constructor(private perJobPostService:PerJobPostService, private router: Router, private route: ActivatedRoute, private jobCategoryService:JobCategoryService) { }


  ngOnInit(): void {
    this.form = new FormGroup({
      picture: new FormControl(''),
      deadline: new FormControl(''),
      jobTitle: new FormControl(''),
      companyName: new FormControl(''),
      vacancyNumber: new FormControl(''),
      employmentStatus: new FormControl(''),
      location: new FormControl(''),
      workplace: new FormControl(''),
      gender: new FormControl(''),
      age: new FormControl(''),
      jobContext: new FormControl(''),
      duties: new FormControl(''),
      education: new FormControl(''),
      experience: new FormControl(''),
      additionalRequirements: new FormControl(''),
      otherBenifits: new FormControl(''),
      salary: new FormControl(''),
      jobCategory: new FormControl(''),
      userId: new FormControl('')
    });

    this.id = this.route.snapshot.params['jobId'];

    this.perJobPostService.find(this.id).subscribe((data: PerJobPost)=>{
      this.perJobPost = data;
    });

    this.jobCategoryService.getJobCategoryList().subscribe((data: JobCategory[])=>{
      this.jobCategory = data;
    })

  }

  
  submit(){
   this.perJobPostService.save(this.form.value).subscribe((res:any) => {
      this.router.navigateByUrl('/employer/per-posted-jobs');
    })
  }



  // update(){
  //   this.perJobPostService.update(this.id, this.form.value).subscribe((res:any) => {
  //        this.router.navigateByUrl('applicant/academic-summary');
  //   })
  // }

}
