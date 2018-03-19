import { Component, OnInit } from '@angular/core';

@Component({
  selector: 't-square',
  template: '',
  styles: [`
    :host {
      display: inline-block;
      margin: 4px;
      background-color: silver;
      width: 30px;
      height: 30px;
    }
  `]
})
export class SquareComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
