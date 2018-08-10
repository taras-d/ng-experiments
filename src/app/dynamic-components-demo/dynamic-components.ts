import { Component } from '@angular/core';
import { Directive, ViewContainerRef } from '@angular/core';

@Component({
  selector: 't-dynamic-circle',
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
export class DynamicCircleComponent { }

@Component({
  selector: 't-dynamic-rect',
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
export class DynamicRectComponent { }

@Component({
  selector: 't-dynamic-square',
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
export class DynamicSquareComponent { }


@Directive({ selector: '[tHolder]' })
export class HolderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {

  }
}
