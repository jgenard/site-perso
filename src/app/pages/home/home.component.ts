import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'app/models/project';

@Component({
  selector: 'app-home',
  template: `
  <div class="container-fluid">
    <h1>Home</h1>
    <div class="row">
      <div class="col" *ngFor="let project of projects">
        <app-project-card title="{{project.title}}"></app-project-card>
      </div>
    </div>
  </div>
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
