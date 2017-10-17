import { Component, OnInit } from '@angular/core';
import { Skill } from './skill';
import * as $ from 'jquery';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.skills = [
      { name: "CSS", progress: 40, category: "Styling" },
      { name: "HTML", progress: 100, category: "Styling" },
      { name: "Javascript", progress: 100, category: "Programming" },
      { name: "C#", progress: 90, category: "Programming" },
      { name: "C++", progress: 35, category: "Programming", description: "As a hobby" },
    ];

    this.groupCategories();
  }

  ngAfterViewInit(){
    (<any>$("span[title]")).tooltip();
  }

  private groupCategories() {
    let me = this;
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

  public skills: Skill[];
  public groupedSkills: any;
  public skillGroups: string[];
}
