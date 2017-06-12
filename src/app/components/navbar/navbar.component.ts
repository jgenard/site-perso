import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  // templateUrl: './navbar.component.html',
  template: `
    <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
      <a class="navbar-brand" routerLink="">jmy-g</a>
      <ul class="nav navbar-nav mr-auto">
        <li class="nav-item" routerLinkActive="active">
          <a class="nav-link"  routerLink="home">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item" routerLinkActive="active">
          <a class="nav-link" routerLink="contact">Contact</a>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
