import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AnimationsDemoRoutingModule } from './animatiosn-demo-routing.module';
import { AnimationsDemoComponent } from './animations-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    AnimationsDemoRoutingModule
  ],
  declarations: [AnimationsDemoComponent]
})
export class AnimationsDemoModule { }
