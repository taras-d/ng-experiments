import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormsDemoRoutingModule } from './reactive-forms-demo-routing.module';
import { ReactiveFormsDemoComponent } from './reactive-forms-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsDemoRoutingModule
  ],
  declarations: [ReactiveFormsDemoComponent]
})
export class ReactiveFormsDemoModule { }
