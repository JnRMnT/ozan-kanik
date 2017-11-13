import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { BioSummaryInfo } from '../response-models/bioSummaryInfo';
import { HttpService } from '../http.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-summary-bio',
  templateUrl: './summary-bio.component.html',
  styleUrls: ['./summary-bio.component.less']
})
export class SummaryBioComponent implements OnInit {
  constructor(private httpService: HttpService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    const me = this;
    let now = moment();
    let birthDate = moment("19920902", "YYYYMMDD");
    this.age = now.diff(birthDate, "years");

    this.httpService.get("summaryInfo/bioSummary").subscribe((response: BioSummaryInfo) => {
      me.bioSummaryInfo = response;
      setTimeout(() => {
        me.initializePhoneNumber();
        (<any>$("a[title]")).tooltip();
      });
    });
  }

  initializePhoneNumber(): void {
    let context = document.querySelector('canvas').getContext('2d');
    context.font = "14px Helvetica";
    context.fillText(this.bioSummaryInfo.phoneNumber, 0, 12, 200);
  }

  sanitize(value: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(value);
  }

  public age: number;
  public bioSummaryInfo: BioSummaryInfo;
}
