import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateOutletDemoRoutingModule } from './template-outlet-demo-routing.module';
import { TemplateOutletDemoComponent } from './template-outlet-demo.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TemplateOutletDemoRoutingModule
  ],
  declarations: [TemplateOutletDemoComponent, UserDetailsComponent]
})
export class TemplateOutletDemoModule { }
