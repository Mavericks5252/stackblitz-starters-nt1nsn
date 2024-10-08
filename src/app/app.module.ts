import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {SiteHeaderComponent} from './site-header/site-header.component'

@NgModule({
  imports: [
    CommonModule,
    BrowserModule, 
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SiteHeaderComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }