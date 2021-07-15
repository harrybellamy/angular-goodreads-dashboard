import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  

import { AppComponent } from './app.component';
import { MostRecentComponent } from './most-recent/most-recent.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { AppRoutingModule } from './app-routing.module';
import { CurrentlyReadingComponent } from './currently-reading/currently-reading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SignalrComponent } from './signalr/signalr-component';
import { GuitarsComponent } from './guitars/guitars.component';

@NgModule({
  declarations: [
    AppComponent,
    MostRecentComponent,
    BookDetailsComponent,
    CurrentlyReadingComponent,
    SignalrComponent,
    GuitarsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
