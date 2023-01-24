import { Component } from '@angular/core';

@Component({
  selector: 'app-academic-summary',
  templateUrl: './academic-summary.component.html',
  styleUrls: ['./academic-summary.component.scss']
})
export class AcademicSummaryComponent {

  form = false;
  data = true;
  dataClose(){
   this.form = true;
   this.data = false;
  }

  formClose(){
    this.data = true;
    this.form = false;
  }

  formOpen(){
    this.form = true;
  }

}
