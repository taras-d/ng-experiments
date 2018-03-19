import { Component, OnInit } from '@angular/core';

@Component({
  selector: 't-circle',
  template: '',
  styles: [`
    :host {
        display: inline-block;
        margin: 4px;
        background-color: orange;
        border-radius: 100%;
        width: 30px;
        height: 30px;
    }
  `]
})
export class CircleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
