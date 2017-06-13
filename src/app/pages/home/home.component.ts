import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'app/models/project';

@Component({
  selector: 'app-home',
  template: `
    <section class="jumbotron">
      <app-quick-presentation title="Jérémy Génard"
                              [tags]="['Fullstack', 'Front-end', 'Microsoft MCP', 'Asp.Net MVC']"
                              description="Développeur"
                              imgSrc="assets/img/jeremy.png">
      </app-quick-presentation>
    </section>
    <hr />
    <h2>Projets</h2>
    <div class="row">
      <div class="col" *ngFor="let project of projects">
        <app-project-card title="{{project.title}}" description="{{project.description}}" imgSrc="{{project.imgSrc}}"></app-project-card>
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
