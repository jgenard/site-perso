import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  template: `
  <div class="card mb-4" style="width: 20rem;">
    <img *ngIf="imgSrc" class="card-img-top" src="{{imgSrc}}" alt="Card image cap" >
    <div class="card-block">
      <h4 class="card-title">{{title}}</h4>
      <p class="card-text">{{description}}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  `,
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() imgSrc?: string;

  constructor() { }

  ngOnInit() {
  }

}
