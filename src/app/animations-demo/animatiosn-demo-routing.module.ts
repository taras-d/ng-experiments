import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimationsDemoComponent } from './animations-demo.component';

const routes: Routes = [
  {
    path: 'animations',
    component: AnimationsDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationsDemoRoutingModule { }
