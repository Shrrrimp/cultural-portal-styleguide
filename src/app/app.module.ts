import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorsComponent } from './components/colors/colors.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ButtonColoredComponent } from './components/button-colored/button-colored.component';
import { ButtonOutlinedDarkComponent } from './components/button-outlined-dark/button-outlined-dark.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { HeadingsComponent } from './components/headings/headings.component';
import { SearchComponent } from './components/search/search.component';
import { TimelineComponent } from './components/timeline/timeline.component';

import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { GalleryComponent } from './components/gallery/gallery.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    ColorsComponent,
    WelcomeComponent,
    ButtonColoredComponent,
    ButtonOutlinedDarkComponent,
    ParagraphComponent,
    HeadingsComponent,
    SearchComponent,
    TimelineComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnimateOnScrollModule.forRoot(),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
