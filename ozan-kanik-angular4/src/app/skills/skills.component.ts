import { Component, OnInit } from '@angular/core';
import { Skill } from './skill';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent implements OnInit {

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    const me = this;
    me.httpService.get("skills").subscribe((response: Skill[]) => {
      me.skills = response;
      me.groupCategories();
      me.indexCounter = 0;
      setTimeout(() => {
        (<any>$("span[title],a[title]")).tooltip();
      });
    });
  }

  private groupCategories() {
    const me = this;
    this.groupedSkills = {};
    this.skillGroups = [];
    this.skills.forEach(skill => {
      if (me.groupedSkills[skill.category]) {
        me.groupedSkills[skill.category].push(skill);
      } else {
        me.groupedSkills[skill.category] = [skill];
        me.skillGroups.push(skill.category);
      }
    });
  }

  getCurrentSkillClass(progress: number): string {
    if (progress > 7.5) {
      return "progress-bar-info";
    } else if (progress > 5) {
      return "progress-bar-success";
    } else if (progress > 2.5) {
      return "progress-bar-warning";
    } else {
      return "progress-bar-danger";
    }
  }

  public skills: Skill[];
  public groupedSkills: any;
  public skillGroups: string[];
  public indexCounter: number;
}
