import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/Dashboard/app.component';
import { ImageComponent } from './components/Images/image.component';
import { LoginComponent } from './components/login/login.component';
import {UserComponent } from './components/UserDetail/user.component';
import { AboutComponent } from './components/About/about.component';
import {AppRoutingModule } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,    
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
      ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
