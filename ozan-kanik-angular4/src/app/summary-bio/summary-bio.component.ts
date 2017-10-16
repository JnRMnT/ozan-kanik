import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-summary-bio',
  templateUrl: './summary-bio.component.html',
  styleUrls: ['./summary-bio.component.less']
})
export class SummaryBioComponent implements OnInit {
  constructor() { }

  ngOnInit() {
      let now = moment();
      let birthDate = moment("19920902","YYYYMMDD");
      this.age = now.diff(birthDate, "years");

      let context = document.querySelector('canvas').getContext('2d');
      context.font = "14px Helvetica";
      context.fillText('+905055114635', 0, 12, 200);
  }

  public age: number;
}