import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestBenchComponent } from './test-bench.component';

const routes: Routes = [
  {
    path: 'test-bench/:name',
    component: TestBenchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestBenchRoutingModule { }
