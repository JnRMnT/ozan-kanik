import { Component, OnInit } from '@angular/core';
import { EducationInfo } from './education-info';
import * as moment from 'moment';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.less']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.educationInfo = [
      {
        beginDate: new Date(2006, 8, 1),
        endDate: new Date(2010, 8, 1),
        degreeName: "High School",
        gpa: 85,
        gpaOutOf: 100,
        schoolName: "Eskişehir Anatolian High School",
        thumbnailUrl: "https://pbs.twimg.com/profile_images/664481298866700288/ZP961Lu-.jpg"
      },
      {
        beginDate: new Date(2010, 8, 1),
        endDate: new Date(2015, 8, 1),
        degreeName: "Bachelors Degree",
        gpa: 2.99,
        gpaOutOf: 4,
        schoolName: "Yıldız Technical University",
        description: "Computer Engineering",
        thumbnailUrl: "https://upload.wikimedia.org/wikipedia/commons/3/37/Y%C4%B1ld%C4%B1z_Technical_University_Logo.png"
      },
      {
        beginDate: new Date(2006, 8, 1),
        endDate: new Date(2010, 8, 1),
        degreeName: "High School",
        gpa: 85,
        gpaOutOf: 100,
        schoolName: "Eskişehir Anatolian High School",
        thumbnailUrl: "https://pbs.twimg.com/profile_images/664481298866700288/ZP961Lu-.jpg"
      }
    ];
    
    this.sortEducationInfo();
  }

  public sortEducationInfo(): void {
    this.educationInfo.sort((project1, project2): number => {
      if (moment(project1.beginDate).isBefore(project2.beginDate)) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  public educationInfo: EducationInfo[];
  private additionalInfo: string;
}
