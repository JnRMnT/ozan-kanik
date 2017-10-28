import * as $ from 'jquery';
import { LoadingModule } from 'ngx-loading';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { PreferencesService } from './preferences.service';
import { LoadingService } from './loading.service';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { SummaryBioComponent } from './summary-bio/summary-bio.component';
import { DateIntervalPipe } from './date-interval.pipe';
import { CategoryFilterPipe } from './projects/category-filter.pipe';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MailtoPipe } from './mailto.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkExperienceComponent,
    ContactComponent,
    EducationComponent,
    ProjectsComponent,
    SkillsComponent,
    SummaryBioComponent,
    DateIntervalPipe,
    CategoryFilterPipe,
    MailtoPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    LoadingModule.forRoot({
      fullScreenBackdrop: true
    }),
    FormsModule,
    ReactiveFormsModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [HttpService, PreferencesService, LoadingService],
  bootstrap: [AppComponent],
  schemas: [
    HeaderComponent
  ]
})
export class AppModule { }
