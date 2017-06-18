import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { QuickPresentationComponent } from './components/quick-presentation/quick-presentation.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { JumboComponent } from './components/jumbo/jumbo.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    PageNotFoundComponent,
    HomeComponent,
    ContactComponent,
    ProjectCardComponent,
    QuickPresentationComponent,
    HomepageComponent,
    CarouselComponent,
    JumboComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
      { path: 'homepage', component: HomepageComponent, data: { animation: 'HomePage' } },
      { path: 'contact', component: ContactComponent, data: { animation: 'ContactPage' } },
      { path: '**', component: PageNotFoundComponent, data: { animation: 'PageNotFound' } }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
