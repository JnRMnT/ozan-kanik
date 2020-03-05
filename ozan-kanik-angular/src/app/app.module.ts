import { ToastrModule } from 'ngx-toastr';
import { LoadingModule } from 'ngx-loading';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppInitializerModule } from './app-initializer/app-initializer.module';

import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { TranslateService } from './translate.service';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MailtoPipe } from './mailto.pipe';
import { TranslatePipe } from './translate.pipe';

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
    MailtoPipe,
    TranslatePipe    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    LoadingModule.forRoot({
      fullScreenBackdrop: true
    }),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppInitializerModule
  ],
  providers: [HttpService, PreferencesService, LoadingService, TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
