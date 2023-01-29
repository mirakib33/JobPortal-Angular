import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PerJobPost } from 'src/app/models/employer/per-job-post.model';
import { PerJobPostService } from 'src/app/services/employer/per-job-post.service';

@Component({
  selector: 'app-per-job-post',
  templateUrl: './per-job-post.component.html',
  styleUrls: ['./per-job-post.component.scss']
})
export class PerJobPostComponent {

  form!: FormGroup;
  id: number = 33;
  userId: number = 2;
  perJobPost: PerJobPost;
  perJobPosts: PerJobPost[] = [];
  constructor(private perJobPostService:PerJobPostService, private router: Router) { 

    this.perJobPost = {
      id:0,
      picture:  ' ',
      deadline:  ' ',
      jobTitle:  ' ',
      companyName:  ' ',
      vacancyNumber:  0,
      employmentStatus:  '',
      location: '',
      workplace:  '',
      gender:  '',
      age:  0,
      jobContext:  '',
      duties:  '',
      education:  '',
      experience:  '',
      additionalRequirements:  '',
      otherBenifits:  '',
      salary:  0.0,
      jobCategory:  '',
      userId:  0,
    }

  }


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

    this.perJobPostService.find(this.id).subscribe((data: PerJobPost)=>{
      this.perJobPost = data;
    });

    this.perJobPostService.getAll().subscribe((data: PerJobPost[])=>{
      this.perJobPosts = data;
    })

  }

  abc!: PerJobPost;
  submit(){
   
    this.perJobPostService.save(this.form.value).subscribe((res:any) => {
      this.abc = res;
      console.log("Af Subbmit called---", this.abc);
      this.router.navigateByUrl('/employer/per-posted-jobs');
    })
  }

  update(){
    this.perJobPostService.update(this.id, this.form.value).subscribe((res:any) => {
         this.router.navigateByUrl('applicant/academic-summary');
    })
  }

  // deletePost(id:number){
  //   this.perJobPostService.delete(id).subscribe(res => {
  //        this.perJobPosts = this.perJobPosts.filter(item => item.id !== id);
  //   })
  // }

}
