export class GlobalConfig {
    availableApps: AvailableProject[];
    availableWebs: AvailableProject[];

    constructor() {
        this.availableApps = [
            {
                name: "ExpressJS",
                description: "ExpressJS as API, including Redis for caching",
                location: "http://localhost:1337/",
                identifier: "expressjs",
                isDefault: true
            }
        ];

        this.availableWebs = [
            {
                name: "Angular4",
                description: "Angular4 as Front-End",
                location: "ozan-kanik-angular4",
                identifier: "angular4",
                isDefault: true
            }
        ];
    }
}
export class AvailableProject {
    public name: string;
    public description: string;
    public location: string;
    public identifier: string;
    public isDefault: boolean;
}