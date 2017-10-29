import { Component, OnInit } from '@angular/core';
import { Project } from './project';
import * as moment from 'moment';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    const me = this;
    me.httpService.get("projects").subscribe((response: Project[]) => {
      me.projects = response;
      me.arrangeCategories();
    });
  }

  public sortProjects(): void {
    this.projects.sort((project1, project2): number => {
      if (moment(project1.beginDate).isBefore(project2.beginDate)) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  public arrangeCategories(): void {
    let me = this;
    me.categories = ["-1"];
    me.projects.forEach(project => {
      if (me.categories.indexOf(project.category) == -1) {
        me.categories.push(project.category);
      }
    });
  }

  public projects: Project[];
  private categories: string[];
  private activeCategory: string = "-1";
}
