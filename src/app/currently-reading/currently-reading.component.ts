import { Component, OnInit } from '@angular/core';
import { Channel } from '../goodreads-models';
import { GoodreadsService } from '../goodreads.service';

@Component({
  selector: 'app-currently-reading',
  templateUrl: './currently-reading.component.html',
  styleUrls: ['./currently-reading.component.css']
})
export class CurrentlyReadingComponent implements OnInit {

  channel?: Channel;

  constructor(private goodReadsService: GoodreadsService ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.goodReadsService.getCurrentlyReadingData()
        .subscribe(channel => this.channel = channel);
  }
}
