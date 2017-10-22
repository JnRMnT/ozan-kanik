import { EducationInfoSummaryContent } from './educationInfo';
import { BioSummaryInfoContent } from './bioSummaryInfo';

export class SummaryInfo {
    type: string;
    content: EducationInfoSummaryContent | BioSummaryInfoContent | TestSummaryInfoContent;
}

export interface ISummaryInfoContent {

}

export class TestSummaryInfoContent implements ISummaryInfoContent {
    public testValue: string;
}
