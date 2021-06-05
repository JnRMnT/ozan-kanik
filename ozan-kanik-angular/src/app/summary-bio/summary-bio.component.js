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
var SummaryBioComponent = (function () {
    function SummaryBioComponent(httpService, sanitizer) {
        this.httpService = httpService;
        this.sanitizer = sanitizer;
    }
    SummaryBioComponent.prototype.ngOnInit = function () {
        var me = this;
        var now = moment();
        var birthDate = moment("19920902", "YYYYMMDD");
        this.age = now.diff(birthDate, "years");
        this.httpService.get("summaryInfo/bioSummary").subscribe(function (response) {
            me.bioSummaryInfo = response;
            setTimeout(function () {
                me.initializePhoneNumber();
                $("a[title]").tooltip({
                    container: "body"
                });
            });
        });
    };
    SummaryBioComponent.prototype.initializePhoneNumber = function () {
        var context = document.querySelector('canvas').getContext('2d');
        context.font = "14px Helvetica";
        context.fillText(this.bioSummaryInfo.phoneNumber, 0, 12, 200);
    };
    SummaryBioComponent.prototype.sanitize = function (value) {
        return this.sanitizer.bypassSecurityTrustUrl(value);
    };
    return SummaryBioComponent;
}());
SummaryBioComponent = __decorate([
    core_1.Component({
        selector: 'app-summary-bio',
        templateUrl: './summary-bio.component.html',
        styleUrls: ['./summary-bio.component.less']
    })
], SummaryBioComponent);
exports.SummaryBioComponent = SummaryBioComponent;
//# sourceMappingURL=summary-bio.component.js.map