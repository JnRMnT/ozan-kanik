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

  getCurrentSkillClass(innerIndex: number, outerIndex: number): string {
    const me = this;
    let totalIndex = 0;
    for (let i = 0; i < outerIndex; i++) {
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
  }

  public skills: Skill[];
  public groupedSkills: any;
  public skillGroups: string[];
  public indexCounter: number;
}
