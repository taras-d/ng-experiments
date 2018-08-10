import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultipleOutletsDemoComponent } from './multiple-outlets-demo.component';

const routes: Routes = [
  {
    path: 'multiple-outlets',
    component: MultipleOutletsDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultipleOutletsDemoRoutingModule { }
