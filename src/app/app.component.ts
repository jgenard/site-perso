import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <app-navbar [tags]="['Fullstack', 'Front-end', 'Microsoft MCP', 'Asp.Net MVC']"></app-navbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
}
