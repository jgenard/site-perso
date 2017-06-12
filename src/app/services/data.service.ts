import { Project } from './../models/project';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  getProjects(): Project[] {
    const projects = new Array<Project>();

    projects.push(new Project('Projet #1', 'Un premier projet'));
    projects.push(new Project('Projet #2', 'Un deuxième projet'));
    projects.push(new Project('Projet #2', 'Un deuxième projet'));

    return projects;
  }

}
