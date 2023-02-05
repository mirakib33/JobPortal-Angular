import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personal-cv',
  templateUrl: './personal-cv.component.html',
  styleUrls: ['./personal-cv.component.scss']
})
export class PersonalCvComponent implements OnInit{

  ngOnInit(): void {
    
  }

  cv : boolean = true;

  view(){
    this.cv = true;
    Swal.fire({
      icon: 'success',
      title: 'Uploaded!',
      text: "Your file has been uploaded!",
      showConfirmButton: false,
      timer: 1500
    })
  }

  delete(){

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
        this.cv = false;
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

}
