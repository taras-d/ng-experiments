import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ModalComponent } from './modal/modal.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { LoaderComponent } from './loader/loader.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    RouterModule,

    LayoutComponent,
    ModalComponent,
    TooltipComponent,
    LoaderComponent,
    CheckboxComponent
  ],
  declarations: [
    LayoutComponent,
    ModalComponent,
    TooltipComponent,
    LoaderComponent,
    CheckboxComponent
  ]
})
export class SharedModule { }
