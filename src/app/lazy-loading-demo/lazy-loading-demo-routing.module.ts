import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyLoadingDemoComponent } from './lazy-loading-demo.component';

const routes: Routes = [
  {
    path: '',
    component: LazyLoadingDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingDemoRoutingModule { }
