import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorsComponent } from './components/colors/colors.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ButtonColoredComponent } from './components/button-colored/button-colored.component';
import { ButtonOutlinedDarkComponent } from './components/button-outlined-dark/button-outlined-dark.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorsComponent,
    WelcomeComponent,
    ButtonColoredComponent,
    ButtonOutlinedDarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
