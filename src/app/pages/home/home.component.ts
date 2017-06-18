import { Photo } from './../../models/photo';
import { Observable } from 'rxjs/Observable';
import { FlickrService } from './../../services/flickr.service';
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
    <ng-container *ngIf="flickrPhotos | async as photos; else noPhotos">
      <p class="lead">Quelques uns de mes clichés.</p>
      <div class="d-flex align-content-around justify-content-around flex-wrap">
          <img *ngFor="let photo of photos"
              src="{{photo.url}}"
              class="img-thumbnail w-25 h-25 m-2"/>
      </div>
    </ng-container>
    <ng-template #noPhotos>
      <p>Les photos sont en cours de chargement.</p>
      <h1>Retrouver mes photos sur Flickr</h1>
    </ng-template>
  </app-jumbo>
  `,
  styleUrls: ['./home.component.css'],
  providers: [
    DataService,
    FlickrService
  ]
})
export class HomeComponent implements OnInit {
  flickrPhotos: any;

  projects: Project[];
  photos: Photo[];

  constructor(private dataSvc: DataService, private flickr: FlickrService) { }

  ngOnInit() {
    this.projects = this.dataSvc.getProjects();

    this.flickrPhotos = this.flickr.getPhotos('150536094@N08');
  }

}
