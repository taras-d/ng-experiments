import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    TooltipComponent
  ],
  declarations: [
    ModalComponent,
    TooltipComponent
  ]
})
export class SharedModule { }
