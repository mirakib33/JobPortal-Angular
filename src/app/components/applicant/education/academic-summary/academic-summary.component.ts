import { Component } from '@angular/core';

@Component({
  selector: 'app-academic-summary',
  templateUrl: './academic-summary.component.html',
  styleUrls: ['./academic-summary.component.scss']
})
export class AcademicSummaryComponent {





  
  formOC = false;
  dataOC = true;
  dataClose(){
   this.formOC = true;
   this.dataOC = false;
  }

  formClose(){
    this.dataOC = true;
    this.formOC = false;
  }

  formOpen(){
    this.formOC = true;
  }

}
