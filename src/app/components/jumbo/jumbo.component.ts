import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jumbo',
  template: `
    <div class="jumbotron jumbotron-fluid">
      <div class="container-fluid">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./jumbo.component.css']
})
export class JumboComponent implements OnInit {
  @Input() color?: String;

  constructor() { }

  ngOnInit() {
  }

}
