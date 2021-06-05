import { Component, OnInit, ViewChild } from '@angular/core';
import moment from 'moment';
import { BioSummaryInfo } from '../response-models/bioSummaryInfo';
import { HttpService } from '../http.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { JM } from 'jm-utilities';
import { ElementRef } from '@angular/core';

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
        (<any>$("a[title]")).tooltip({
          container: "body"
        });
      });
    });
  }

  initializePhoneNumber(): void {
    let self = this;
    JM.waitFor(() => {
      return JM.isDefined(self.phoneCanvas) && JM.isDefined(self.phoneCanvas.nativeElement);
    }).then(() => {
      let context = self.phoneCanvas.nativeElement.getContext('2d');
      context.font = "14px Helvetica";
      context.fillText(self.bioSummaryInfo.phoneNumber, 0, 12, 200);
    });
  }

  sanitize(value: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(value);
  }

  public age: number;
  public bioSummaryInfo: BioSummaryInfo;
  @ViewChild("phoneCanvas")
  protected phoneCanvas: ElementRef<HTMLCanvasElement>;
}
