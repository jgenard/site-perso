import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quick-presentation',
  template: `
  <div class="row align-items-center">
    <div class="col">
      <h3>{{title}}</h3>
      <ng-container *ngIf="tags">
        <ng-container *ngFor="let tag of tags">
          <span class="badge badge-default">{{tag}}</span>
        </ng-container>
      </ng-container>
      <blockquote class="blockquote"><p>{{description}}</p></blockquote>
    </div>
    <div class="col">
      <img src="{{imgSrc}}" class="img-thumbnail rounded-circle" />
    </div>
  </div>
  `,
  styleUrls: ['./quick-presentation.component.css']
})
export class QuickPresentationComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() imgSrc?: string;
  @Input() tags?: string[];

  constructor() { }

  ngOnInit() {
  }

}
