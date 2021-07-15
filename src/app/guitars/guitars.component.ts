import { Component, OnInit } from '@angular/core';
import { Guitar } from '../guitar-models';
import { GuitarsService } from '../guitars.service';

@Component({
  selector: 'app-guitars',
  templateUrl: './guitars.component.html',
  styleUrls: ['./guitars.component.css']
})
export class GuitarsComponent implements OnInit {

  guitars: Guitar[] | undefined;

  constructor(private guitarService: GuitarsService) { }

  ngOnInit(): void {
    this.getGuitars();
  }
  getGuitars() {
    this.guitarService.getAll()
      .subscribe(data => {
        console.debug(data);
        this.guitars = data;})
  }
}
