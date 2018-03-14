import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'reactive-forms'
  },
  {
    path: 'lazy-loading',
    loadChildren: 'app/lazy-loading-demo/lazy-loading-demo.module#LazyLoadingDemoModule'
  },
  {
    path: '**',
    redirectTo: 'reactive-forms'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
