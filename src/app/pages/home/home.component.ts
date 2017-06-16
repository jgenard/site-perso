import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'app/models/project';

@Component({
  selector: 'app-home',
  template: `
  <app-jumbo color="#fdfdfd">
    <h1 class="display-3">Qui suis-je ?</h1>
    <p class="lead">Exemples de projet sur lesquels j'ai travaillés.</p>
    <div class="d-flex align-content-around justify-content-around flex-wrap">
      <app-project-card *ngFor="let project of projects"
                        title="{{project.title}}"
                        description="{{project.description}}"
                        imgSrc="{{project.imgSrc}}"></app-project-card>
    </div>
  </app-jumbo>
  <app-jumbo color="#f3f3f3">
    <h1 class="display-3">Hobbies</h1>
    <p class="lead">Passionné par la musique, les jeux vidéo, la photographie, la science et bien d'autres choses.</p>
    <p class="lead">Quelques uns de mes clichés.</p>
    <div class="d-flex align-content-around justify-content-around flex-wrap">
        <img *ngFor="let photo of photos"
            src="{{photo}}"
            class="img-thumbnail w-25 h-25 m-2"/>
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
  protected photos: String[];

  constructor(private dataSvc: DataService) { }

  ngOnInit() {
    this.projects = this.dataSvc.getProjects();
    this.photos = this.dataSvc.getPhotos(20);
  }

}
