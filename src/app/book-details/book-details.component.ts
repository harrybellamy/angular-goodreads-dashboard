import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../goodreads-models';
import { GoodreadsService } from '../goodreads.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book?: Book;

  constructor(
    private route: ActivatedRoute,
    private goodreadsService: GoodreadsService,
    private location: Location) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    const id = String(this.route.snapshot.params.id );
    this.goodreadsService.getBookWithId(id)
      .subscribe(book => this.book = book);
  }

  goBack(): void {
    this.location.back();
  }
}
