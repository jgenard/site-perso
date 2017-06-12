import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  template: `
  <div class="card" style="width: 20rem;">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-block">
      <h4 class="card-title">{{title}}</h4>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  `,
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
