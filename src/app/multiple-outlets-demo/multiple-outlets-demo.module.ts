import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultipleOutletsDemoRoutingModule } from './multiple-outlets-demo-routing.module';
import { MultipleOutletsDemoComponent } from './multiple-outlets-demo.component';

@NgModule({
  imports: [
    CommonModule,
    MultipleOutletsDemoRoutingModule
  ],
  declarations: [MultipleOutletsDemoComponent]
})
export class MultipleOutletsDemoModule { }
