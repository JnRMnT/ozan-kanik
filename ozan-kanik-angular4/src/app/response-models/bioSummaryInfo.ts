import { ISummaryInfoContent } from './summaryInfo';

export class BioSummaryInfo {
    public contactInformation: PersonalContactInformation;
    public title: string;
    public location: string;
    public email: string;
    public phoneNumber: string;
}

export class PersonalContactInformation {
    public github: string;
    public facebook: string;
    public twitter: string;
    public linkedin: string;
    public skype: string;
}


export class BioSummaryInfoContent implements ISummaryInfoContent {
    public type: string = "education";
    public content: BioSummaryInfo;
}
