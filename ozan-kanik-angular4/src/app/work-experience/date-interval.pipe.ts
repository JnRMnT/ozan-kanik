import { Pipe, PipeTransform } from '@angular/core';
import { WorkExperience } from './work-experience';
import * as moment from 'moment';

@Pipe({
  name: 'dateInterval'
})
export class DateIntervalPipe implements PipeTransform {

  transform(value: WorkExperience, args?: any): string {
    let dateRangeString = moment(value.beginDate).format("MM/YYYY") + " - ";
    if(value.endDate){
      dateRangeString+= moment(value.endDate).format("MM/YYYY");
    }

    return dateRangeString;
  }
}
