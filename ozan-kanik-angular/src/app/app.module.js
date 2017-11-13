"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ngx_loading_1 = require("ngx-loading");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var common_1 = require("@angular/common");
var app_initializer_module_1 = require("./app-initializer/app-initializer.module");
var app_component_1 = require("./app.component");
var http_service_1 = require("./http.service");
var translate_service_1 = require("./translate.service");
var preferences_service_1 = require("./preferences.service");
var loading_service_1 = require("./loading.service");
var header_component_1 = require("./header/header.component");
var work_experience_component_1 = require("./work-experience/work-experience.component");
var contact_component_1 = require("./contact/contact.component");
var education_component_1 = require("./education/education.component");
var projects_component_1 = require("./projects/projects.component");
var skills_component_1 = require("./skills/skills.component");
var summary_bio_component_1 = require("./summary-bio/summary-bio.component");
var date_interval_pipe_1 = require("./date-interval.pipe");
var category_filter_pipe_1 = require("./projects/category-filter.pipe");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var animations_1 = require("@angular/platform-browser/animations");
var mailto_pipe_1 = require("./mailto.pipe");
var translate_pipe_1 = require("./translate.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            work_experience_component_1.WorkExperienceComponent,
            contact_component_1.ContactComponent,
            education_component_1.EducationComponent,
            projects_component_1.ProjectsComponent,
            skills_component_1.SkillsComponent,
            summary_bio_component_1.SummaryBioComponent,
            date_interval_pipe_1.DateIntervalPipe,
            category_filter_pipe_1.CategoryFilterPipe,
            mailto_pipe_1.MailtoPipe,
            translate_pipe_1.TranslatePipe
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpClientModule,
            common_1.CommonModule,
            ngx_loading_1.LoadingModule.forRoot({
                fullScreenBackdrop: true
            }),
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            ng2_toastr_1.ToastModule.forRoot(),
            animations_1.BrowserAnimationsModule,
            app_initializer_module_1.AppInitializerModule
        ],
        providers: [http_service_1.HttpService, preferences_service_1.PreferencesService, loading_service_1.LoadingService, translate_service_1.TranslateService],
        bootstrap: [app_component_1.AppComponent],
        schemas: [
            header_component_1.HeaderComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map