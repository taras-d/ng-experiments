import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentsDemoRoutingModule } from './dynamic-components-demo-routing.module';
import { DynamicComponentsDemoComponent } from './dynamic-components-demo.component';
import {
  DynamicCircleComponent,
  DynamicSquareComponent,
  DynamicRectComponent,
  HolderDirective
} from './dynamic-components';

@NgModule({
  imports: [
    CommonModule,
    DynamicComponentsDemoRoutingModule
  ],
  declarations: [
    DynamicComponentsDemoComponent,
    DynamicCircleComponent,
    DynamicSquareComponent,
    DynamicRectComponent,
    HolderDirective
  ],
  entryComponents: [
    DynamicCircleComponent,
    DynamicSquareComponent,
    DynamicRectComponent,
  ]
})
export class DynamicComponentsDemoModule { }
