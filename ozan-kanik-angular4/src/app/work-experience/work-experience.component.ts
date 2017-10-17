import { Component, OnInit } from '@angular/core';
import { WorkExperience } from './work-experience';
import * as moment from 'moment';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.less']
})
export class WorkExperienceComponent implements OnInit {

  constructor() {
    this.workExperiences = [
      {
        beginDate: new Date(2014, 8, 1),
        company: "Veripark",
        title: "Software Developer",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora.",
        thumbnailUrl: "https://pbs.twimg.com/profile_images/557518107988602880/agcQcSfa.png"
      },
      {
        beginDate: new Date(2012, 8, 1),
        company: "Veripark",
        title: "Software Developer",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora."
      },
      {
        beginDate: new Date(2013, 8, 1),
        endDate: new Date(2014, 8, 1),
        company: "Veripark",
        title: "Software Developer",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora."
      }
    ];
  }

  ngOnInit() {
    this.sortExperiences();
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
