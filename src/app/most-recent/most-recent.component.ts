import { Component, OnInit } from '@angular/core';
import { Channel } from '../goodreads-models';
import { GoodreadsService } from '../goodreads.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-most-recent',
  templateUrl: './most-recent.component.html',
  styleUrls: ['./most-recent.component.css']
})
export class MostRecentComponent implements OnInit {

  channel?: Channel;

  constructor(private goodReadsService: GoodreadsService ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.goodReadsService.getData()
        .subscribe(channel => this.channel = channel);
  }

  drop(event: CdkDragDrop<string[]>) {
    var items = this.channel?.items;
    if (items !== undefined) {
      moveItemInArray(items, event.previousIndex, event.currentIndex);
    }
  }
}
