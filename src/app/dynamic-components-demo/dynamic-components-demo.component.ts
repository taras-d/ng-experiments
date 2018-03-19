import { Component, ViewChild, ComponentFactoryResolver, AfterViewInit } from '@angular/core';

import { HolderDirective } from './holder/holder.directive';
import { RectComponent } from './rect/rect.component';
import { CircleComponent } from './circle/circle.component';
import { SquareComponent } from './square/square.component';

@Component({
  selector: 't-dynamic-components-demo',
  templateUrl: './dynamic-components-demo.component.html',
  styleUrls: ['./dynamic-components-demo.component.less']
})
export class DynamicComponentsDemoComponent implements AfterViewInit {

  @ViewChild(HolderDirective) holder: HolderDirective;

  constructor(private cmpFactoryResolver: ComponentFactoryResolver) {

  }

  ngAfterViewInit(): void {
    this.add('rect');
    this.add('square');
    this.add('circle');
  }

  add(name: string): void {
    const map = {
      circle: CircleComponent,
      rect: RectComponent,
      square: SquareComponent
    };

    const factory = this.cmpFactoryResolver.resolveComponentFactory(map[name]);

    const viewRef = this.holder.viewContainerRef;

    const cmpRef = viewRef.createComponent(factory);

    console.log(cmpRef.instance);
  }

  clear(): void {
    this.holder.viewContainerRef.clear();
  }

}
