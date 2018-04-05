import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateOutletDemoComponent } from './template-outlet-demo.component';

const routes: Routes = [
  {
    path: 'template-outlet',
    component: TemplateOutletDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateOutletDemoRoutingModule { }
