"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var moment = require("moment");
var EducationComponent = (function () {
    function EducationComponent(httpService) {
        this.httpService = httpService;
    }
    EducationComponent.prototype.ngOnInit = function () {
        var me = this;
        me.httpService.get("summaryInfo/education").subscribe(function (response) {
            if (response && response.educationHistory) {
                me.educationInfo = response.educationHistory;
                me.sortEducationInfo();
            }
        });
    };
    EducationComponent.prototype.sortEducationInfo = function () {
        this.educationInfo.sort(function (education1, education2) {
            if (moment(education1.beginDate).isAfter(education2.beginDate)) {
                return 1;
            }
            else {
                return -1;
            }
        });
    };
    return EducationComponent;
}());
EducationComponent = __decorate([
    core_1.Component({
        selector: 'app-education',
        templateUrl: './education.component.html',
        styleUrls: ['./education.component.less']
    })
], EducationComponent);
exports.EducationComponent = EducationComponent;
//# sourceMappingURL=education.component.js.map