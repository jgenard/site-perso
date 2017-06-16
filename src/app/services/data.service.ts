import { Project } from './../models/project';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  getProjects(): Project[] {
    const projects = new Array<Project>();

    projects.push(new Project('Projet #1', 'Un premier projet', 'http://fakeimg.pl/250x100/'));
    projects.push(new Project('Projet #2', 'Un deuxième projet', 'http://fakeimg.pl/250x100/'));
    projects.push(new Project('Projet #3', 'Un troisième projet', 'http://fakeimg.pl/250x100/'));
    projects.push(new Project('Projet #3', 'Un troisième projet', 'http://fakeimg.pl/250x100/'));
    projects.push(new Project('Projet #3', 'Un troisième projet', 'http://fakeimg.pl/250x100/'));
    projects.push(new Project('Projet #3', 'Un troisième projet', 'http://fakeimg.pl/250x100/'));
    projects.push(new Project('Projet #3', 'Un troisième projet', 'http://fakeimg.pl/250x100/'));
    projects.push(new Project('Projet #3', 'Un troisième projet', 'http://fakeimg.pl/250x100/'));
    projects.push(new Project('Projet #3', 'Un troisième projet', 'http://fakeimg.pl/250x100/'));
    projects.push(new Project('Projet #3', 'Un troisième projet', 'http://fakeimg.pl/250x100/'));
    projects.push(new Project('Projet #3', 'Un troisième projet', 'http://fakeimg.pl/250x100/'));

    return projects;
  }

  getPhotos(nbPhotos: number): String[] {
    const photoUrls = new Array<String>();

    for (let index = 0; index < nbPhotos; index++) {
      photoUrls.push('http://fakeimg.pl/1920x1080/')
    }

    return photoUrls;
  }
}
