import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingDemoRoutingModule } from './lazy-loading-demo-routing.module';
import { LazyLoadingDemoComponent } from './lazy-loading-demo.component';

@NgModule({
  imports: [
    CommonModule,
    LazyLoadingDemoRoutingModule
  ],
  declarations: [LazyLoadingDemoComponent]
})
export class LazyLoadingDemoModule { }
