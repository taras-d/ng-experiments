import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateOutletDemoRoutingModule } from './template-outlet-demo-routing.module';
import { TemplateOutletDemoComponent } from './template-outlet-demo.component';

@NgModule({
  imports: [
    CommonModule,
    TemplateOutletDemoRoutingModule
  ],
  declarations: [TemplateOutletDemoComponent]
})
export class TemplateOutletDemoModule { }
