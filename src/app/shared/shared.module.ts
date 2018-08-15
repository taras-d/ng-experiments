import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ModalComponent } from './components/modal/modal.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ContentExpanderComponent } from './components/content-expander/content-expander.component';

import { LoremIpsumPipe } from './pipes/lorem-ipsum.pipe';

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
    CheckboxComponent,
    ContentExpanderComponent,

    LoremIpsumPipe
  ],
  declarations: [
    LayoutComponent,
    ModalComponent,
    TooltipComponent,
    LoaderComponent,
    CheckboxComponent,
    ContentExpanderComponent,

    LoremIpsumPipe
  ]
})
export class SharedModule { }
