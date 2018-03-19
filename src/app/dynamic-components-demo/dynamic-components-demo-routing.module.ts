import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DynamicComponentsDemoComponent } from './dynamic-components-demo.component';

const routes: Routes = [
  {
    path: 'dynamic-components',
    component: DynamicComponentsDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicComponentsDemoRoutingModule { }
