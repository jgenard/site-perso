import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  // templateUrl: './navbar.component.html',
  template: `
    <div class="bg-inverse" [ngbCollapse]="isCollapsed" id="navbarHeader" aria-expanded="false">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 py-4">
            <h4 class="text-white">Jérémy Génard</h4>
            <ng-container *ngIf="tags">
              <ng-container *ngFor="let tag of tags">
                <span class="badge badge-default">{{tag}}</span>
              </ng-container>
            </ng-container>
            <p class="text-muted">Add some information about the album below, the author,
            or any other background context. Make it a few sentences long so folks can pick up
            some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
          </div>
          <div class="col-sm-4 py-4">
            <h4 class="text-white">Contact</h4>
            <ul class="list-unstyled">
              <li><a href="https://twitter.com/Jemsouse" class="text-white">Follow on Twitter</a></li>
              <li><a href="https://gurushots.com/jeremygenard/photos" class="text-white">Follow on GuruShots</a></li>
              <li><a href="#" class="text-white">Email me</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar navbar-inverse bg-inverse">
      <div class="container d-flex justify-content-between">
        <a routerLink="home" class="navbar-brand">JMY-G</a>
        <button class="navbar-toggler collapsed" type="button"
                (click)="isCollapsed = !isCollapsed" data-toggle="collapse"
                data-target="#navbarHeader" aria-controls="navbarHeader"
                [attr.aria-expanded]="!isCollapsed" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() tags?: string[];

  public isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
