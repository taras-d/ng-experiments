import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    TooltipComponent,
    LoaderComponent
  ],
  declarations: [
    ModalComponent,
    TooltipComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
