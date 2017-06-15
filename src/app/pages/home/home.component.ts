import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'app/models/project';

@Component({
  selector: 'app-home',
  template: `
  <app-jumbo>
    <h1 class="display-3">Projets</h1>
      <p class="lead">Exemples de projet sur lesquels j'ai travaillés.</p>
      <div class="row">
        <div class="col" *ngFor="let project of projects">
          <app-project-card title="{{project.title}}"
                            description="{{project.description}}"
                            imgSrc="{{project.imgSrc}}"></app-project-card>
        </div>
      </div>
  </app-jumbo>
  `,
  styleUrls: ['./home.component.css'],
  providers: [
    DataService
  ]
})
export class HomeComponent implements OnInit {

  protected projects: Project[];

  constructor(private dataSvc: DataService) { }

  ngOnInit() {
    this.projects = this.dataSvc.getProjects();
  }

}
