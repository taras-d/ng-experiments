import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentsDemoRoutingModule } from './dynamic-components-demo-routing.module';
import { DynamicComponentsDemoComponent } from './dynamic-components-demo.component';
import { SquareComponent } from './square/square.component';
import { CircleComponent } from './circle/circle.component';
import { RectComponent } from './rect/rect.component';
import { HolderDirective } from './holder/holder.directive';

@NgModule({
  imports: [
    CommonModule,
    DynamicComponentsDemoRoutingModule
  ],
  declarations: [
    DynamicComponentsDemoComponent,
    SquareComponent,
    CircleComponent,
    RectComponent,
    HolderDirective
  ],
  entryComponents: [
    SquareComponent,
    CircleComponent,
    RectComponent
  ]
})
export class DynamicComponentsDemoModule { }
