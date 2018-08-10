import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultipleOutletsDemoComponent } from './multiple-outlets-demo.component';
import { 
  MultipleOutletsUsersComponent, MultipleOutletsRolesComponent, MultipleOutletsProfilesComponent
} from './multiple-outlets-components';

const routes: Routes = [
  {
    path: 'multiple-outlets',
    component: MultipleOutletsDemoComponent,
    children: [

      // First outlet
      {
        path: 'users',
        component: MultipleOutletsUsersComponent,
        outlet: 'first'
      },
      {
        path: 'roles',
        component: MultipleOutletsRolesComponent,
        outlet: 'first'
      },
      {
        path: 'profiles',
        component: MultipleOutletsProfilesComponent,
        outlet: 'first'
      },

      // Second outlet
      {
        path: 'users',
        component: MultipleOutletsUsersComponent,
        outlet: 'second'
      },
      {
        path: 'roles',
        component: MultipleOutletsRolesComponent,
        outlet: 'second'
      },
      {
        path: 'profiles',
        component: MultipleOutletsProfilesComponent,
        outlet: 'second'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultipleOutletsDemoRoutingModule { }
