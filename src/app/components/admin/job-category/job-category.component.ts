import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  jobCategory!: JobCategory[];

  constructor(private formBuilder:FormBuilder, private jobCategoryService:JobCategoryService) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      id: [''],
      categoryName: ['']
    });

 
    this.jobCategoryService.getAll().subscribe((data: JobCategory[])=>{
      this.jobCategory = data;
    })
  }

  submit(){
    this.jobCategoryService.save(this.form.value).subscribe(data=>{this.ngOnInit();})
   }

  //  update(){
  //   this.jobCategoryService.update(this.id, this.form.value).subscribe((res:any) => {
  //   })
  // }

  delete(jobCategory:JobCategory){

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
        this.jobCategoryService.delete(jobCategory.id).subscribe(data=>{this.ngOnInit();})
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: "Your file has been deleted!",
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  setValue(jobCategory:JobCategory): void {
    localStorage.setItem('getCatId', jobCategory.id.toString());
    let catId = localStorage.getItem('getCatId');
    
    if(+catId! > 0){
      this.jobCategoryService.find(+catId!).subscribe(data => {
        this.form.patchValue(data);
    })
    }
     
  }

}
