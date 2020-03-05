import { Component, OnInit } from '@angular/core';
import { EducationInfo } from './education-info';
import { EducationInfoContent } from '../response-models/educationInfo';
import { HttpService } from '../http.service';
import moment from 'moment';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.less']
})
export class EducationComponent implements OnInit {

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    const me = this;
    me.httpService.get("summaryInfo/education").subscribe((response: EducationInfoContent) => {
      if (response && response.educationHistory) {
        me.educationInfo = response.educationHistory;
        me.sortEducationInfo();
      }
    });
  }

  public sortEducationInfo(): void {
    this.educationInfo.sort((education1, education2): number => {
      if (moment(education1.beginDate).isAfter(education2.beginDate)) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  public educationInfo: EducationInfo[];
}
