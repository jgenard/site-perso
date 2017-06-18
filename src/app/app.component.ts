import { Component } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  group,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <app-navbar [tags]="['Fullstack', 'Front-end', 'Microsoft MCP', 'Asp.Net MVC']"></app-navbar>
    <div [@routeAnimation]="prepRouteState(routerOutlet)">
      <!-- make sure to keep the ="outlet" part -->
      <router-outlet #routerOutlet="outlet"></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
      // no need to animate anything on load
      transition('* => *', [
            // css styles at start of transition
            style({ opacity: 0 }),
            // animation and styles at end of transition
            animate('.3s', style({ opacity: 1 }))
        ])
    ])
  ]
})
export class AppComponent {
  title = 'app';

  prepRouteState(outlet: any) {
    return outlet.activatedRouteData['animation'] || 'firstPage';
  }
}
