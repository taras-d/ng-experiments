import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { LoaderComponent } from './loader/loader.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    TooltipComponent,
    LoaderComponent,
    CheckboxComponent
  ],
  declarations: [
    ModalComponent,
    TooltipComponent,
    LoaderComponent,
    CheckboxComponent
  ]
})
export class SharedModule { }
