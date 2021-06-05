"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SkillsComponent = (function () {
    function SkillsComponent(httpService) {
        this.httpService = httpService;
    }
    SkillsComponent.prototype.ngOnInit = function () {
        var me = this;
        me.httpService.get("skills").subscribe(function (response) {
            me.skills = response;
            me.groupCategories();
            me.indexCounter = 0;
            setTimeout(function () {
                $("span[title],a[title]").tooltip({
                    container: "body"
                });
            });
        });
    };
    SkillsComponent.prototype.groupCategories = function () {
        var me = this;
        this.groupedSkills = {};
        this.skillGroups = [];
        this.skills.sort(function (skill1, skill2) {
            if (skill1.order == undefined && skill2.order != undefined) {
                return 0;
            }
            else if (skill1.order != undefined && skill2.order == undefined) {
                return -1;
            }
            else if (skill1.order == undefined && skill2.order != undefined) {
                return 1;
            }
            else if (skill1.order < skill2.order) {
                return -1;
            }
            else if (skill2.order < skill1.order) {
                return 1;
            }
            else {
                return -1;
            }
        });
        this.skills.forEach(function (skill) {
            if (me.groupedSkills[skill.category]) {
                me.groupedSkills[skill.category].push(skill);
            }
            else {
                me.groupedSkills[skill.category] = [skill];
                me.skillGroups.push(skill.category);
            }
        });
    };
    SkillsComponent.prototype.getCurrentSkillClass = function (innerIndex, outerIndex) {
        var me = this;
        var totalIndex = 0;
        for (var i = 0; i < outerIndex; i++) {
            totalIndex += me.groupedSkills[me.skillGroups[i]].length;
        }
        totalIndex += innerIndex;
        switch (totalIndex % 4) {
            case 0:
                return "progress-bar-success";
            case 1:
                return "progress-bar-info";
            case 2:
                return "progress-bar-warning";
            case 3:
                return "progress-bar-danger";
            default:
                return "";
        }
    };
    return SkillsComponent;
}());
SkillsComponent = __decorate([
    core_1.Component({
        selector: 'app-skills',
        templateUrl: './skills.component.html',
        styleUrls: ['./skills.component.less']
    })
], SkillsComponent);
exports.SkillsComponent = SkillsComponent;
//# sourceMappingURL=skills.component.js.map