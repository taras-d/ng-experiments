import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TestBenchRoutingModule } from './test-bench-routing.module';
import { TestBenchComponent } from './test-bench.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TestBenchRoutingModule,
    SharedModule
  ],
  declarations: [TestBenchComponent]
})
export class TestBenchModule { }
