import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    PopoverComponent
  ],
  declarations: [
    ModalComponent,
    PopoverComponent
  ]
})
export class SharedModule { }
