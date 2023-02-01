import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { JobCategory } from 'src/app/models/admin/job-category.model';
import { JobCategoryService } from 'src/app/services/admin/job-category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-job-category',
  templateUrl: './job-category.component.html',
  styleUrls: ['./job-category.component.scss']
})
export class JobCategoryComponent implements OnInit {

  form!: FormGroup;
  id!: number;
  jobCategory: JobCategory[] = [];

  constructor(private jobCategoryService:JobCategoryService) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      id: new FormControl(''),
      categoryName: new FormControl(''),
    });

  // setValue() {
  //     this.form = new FormGroup({
  //       id: new FormControl(this.jobCategory.id),
  //       categoryName: new FormControl(this.jobCategory.categoryName),
  //     });
  //   }

    this.jobCategoryService.getAll().subscribe((data: JobCategory[])=>{
      this.jobCategory = data;
    })
  }

  submit(){
    this.jobCategoryService.save(this.form.value).subscribe((res:any) => {
     })

     this.ngOnInit();
   }

   update(){
    this.jobCategoryService.update(this.id, this.form.value).subscribe((res:any) => {
    })
  }

  delete(id:number){

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
        this.jobCategoryService.delete(id).subscribe(res => {
          this.jobCategory = this.jobCategory.filter(item => item.id !== id);
     })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

}
