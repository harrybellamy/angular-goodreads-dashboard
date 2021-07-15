import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CurrentlyReadingComponent } from './currently-reading/currently-reading.component';
import { GuitarsComponent } from './guitars/guitars.component';
import { MostRecentComponent } from './most-recent/most-recent.component';
import { SignalrComponent } from './signalr/signalr-component';

const routes: Routes = [
  { path: '', redirectTo: '/most-recent', pathMatch: 'full' },
  { path: 'book/:id', component: BookDetailsComponent },
  { path: 'most-recent', component: MostRecentComponent },
  { path: 'currently-reading', component: CurrentlyReadingComponent },
  { path: 'guitars', component: GuitarsComponent },
  { path: 'signalr-test', component: SignalrComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
