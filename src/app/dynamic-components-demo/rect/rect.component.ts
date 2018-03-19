import { Component, OnInit } from '@angular/core';

@Component({
  selector: 't-rect',
  template: '',
  styles: [`
    :host {
      display: inline-block;
      margin: 4px;
      background-color: green;
      width: 60px;
      height: 30px;
    }
  `]
})
export class RectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
