import { ISummaryInfoContent } from './summaryInfo';
import { EducationInfo } from '../education/education-info';

export class EducationInfoContent {
  public educationHistory: EducationInfo[];
}

export class EducationInfoSummaryContent implements ISummaryInfoContent {
    public type: string = "education";
    public content: EducationInfoContent;
}
