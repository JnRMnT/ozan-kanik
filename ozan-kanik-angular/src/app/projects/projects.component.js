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
var ProjectsComponent = (function () {
    function ProjectsComponent(httpService) {
        this.httpService = httpService;
        this.activeCategory = "-1";
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var me = this;
        me.httpService.get("projects").subscribe(function (response) {
            me.projects = response;
            me.arrangeCategories();
        });
    };
    ProjectsComponent.prototype.ngAfterViewInit = function () {
        var me = this;
        $(window).on("resize", window._.debounce(function () {
            me.checkScrolls();
        }, 150));
        me.checkScrolls();
    };
    ProjectsComponent.prototype.checkScrolls = function () {
        setTimeout(function () {
            $("#projects .thumbnail .caption").each(function (index, projectWrapper) {
                if ($(window).width() > 960) {
                    $(projectWrapper).slimScroll({
                        height: '250px'
                    });
                }
                else {
                    $(projectWrapper).slimScroll({ destroy: true });
                }
            });
        });
    };
    ProjectsComponent.prototype.sortProjects = function () {
        this.projects.sort(function (project1, project2) {
            if (moment(project1.beginDate).isBefore(project2.beginDate)) {
                return 1;
            }
            else {
                return -1;
            }
        });
    };
    ProjectsComponent.prototype.arrangeCategories = function () {
        var me = this;
        me.categories = ["-1"];
        me.projects.forEach(function (project) {
            if (me.categories.indexOf(project.category) == -1) {
                me.categories.push(project.category);
            }
        });
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    core_1.Component({
        selector: 'app-projects',
        templateUrl: './projects.component.html',
        styleUrls: ['./projects.component.less']
    })
], ProjectsComponent);
exports.ProjectsComponent = ProjectsComponent;
//# sourceMappingURL=projects.component.js.map