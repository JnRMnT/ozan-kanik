import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(projects: Project[], args?: string): Project[] {
    let filteredProjects = projects.slice();
    const filterCategory = args ? args : "-1";
    if(filterCategory != "-1"){
      filteredProjects = filteredProjects.filter(project=>{
        return project.category == filterCategory;
      });
    }
    return filteredProjects;
  }
}