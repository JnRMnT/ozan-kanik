import { ISummaryInfoContent } from './summaryInfo';

export class EducationInfo {
    public schoolName: string;
    public description?: string;
    public degreeName: string;
    public beginDate: Date;
    public endDate?: Date;
    public gpa?: number;
    public gpaOutOf?: number;
    public thumbnailUrl?: string;
}

export class EducationInfoSummaryContent implements ISummaryInfoContent {
    public type: string = "education";
    public content: EducationInfo[];
}
