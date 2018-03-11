import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsDemoComponent } from './reactive-forms-demo.component';

const routes: Routes = [
  {
    path: 'reactive-forms',
    component: ReactiveFormsDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormsDemoRoutingModule { }
