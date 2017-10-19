import { Component, OnInit } from '@angular/core';
import { Project } from './project';
import * as moment from 'moment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.projects = [
      {
        beginDate: new Date(2014, 8, 1),
        name: "HalkBank",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora.",
        thumbnailUrl: "https://lh3.googleusercontent.com/Zg0TthGREWB7NDSyBRAOXazN67hY7K1fNsna7NffhWGYEbYln3Mbnb5_Mfo23nq-YFK0=w300",
        category: "Web",
        projectUrl: "https://sube.halkbank.com.tr"
      },
      {
        beginDate: new Date(2012, 8, 1),
        name: "Ziraat",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora.",
        thumbnailUrl: "http://www.yenicaggazetesi.com.tr/d/news/102892.jpg",
        category: "Game"
      },
      {
        beginDate: new Date(2013, 8, 1),
        endDate: new Date(2014, 8, 1),
        name: "Kızılay",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora.",
        thumbnailUrl: "https://yt3.ggpht.com/--47locZ2iKY/AAAAAAAAAAI/AAAAAAAAAAA/3hOcOVlittw/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
        category: "Mobile"
      }
    ];

    this.sortProjects();
    this.arrangeCategories();
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

  public arrangeCategories():void{
    let me = this;
    me.categories = ["-1"];
    me.projects.forEach(project=>{
      if(me.categories.indexOf(project.category) == -1){
        me.categories.push(project.category);
      }
    });
  }

  public projects: Project[];
  private categories: string[];
  private activeCategory: string = "-1";
}