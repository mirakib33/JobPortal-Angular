import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountInfoService } from 'src/app/services/applicant/account-info.service';
import { AccountInfo } from 'src/app/models/applicant/account-info.model';

@Component({
  selector: 'app-perjob-cv-view',
  templateUrl: './perjob-cv-view.component.html',
  styleUrls: ['./perjob-cv-view.component.scss']
})
export class PerjobCvViewComponent implements OnInit {

  jobId!: number;
  accountInfo!: AccountInfo[];

  constructor(private accountInfoService:AccountInfoService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.jobId = this.route.snapshot.params['jobId'];
    this.accountInfoService.getAppByJobId(this.jobId).subscribe((data: AccountInfo[])=>{
      this.accountInfo = data;
    });
  }

}
