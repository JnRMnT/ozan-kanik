import { Component, OnInit } from '@angular/core';
import { WorkExperience } from './work-experience';
import * as moment from 'moment';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.less']
})
export class WorkExperienceComponent implements OnInit {

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    const me = this;
    me.httpService.get("workExperiences").subscribe((response: WorkExperience[]) => {
      me.workExperiences = response;
    });
  }

  public sortExperiences(): void {
    this.workExperiences.sort((experience1, experience2): number => {
      if (moment(experience1.beginDate).isBefore(experience2.beginDate)) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  public workExperiences: WorkExperience[];
}
