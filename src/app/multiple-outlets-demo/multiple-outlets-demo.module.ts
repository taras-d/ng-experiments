import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultipleOutletsDemoRoutingModule } from './multiple-outlets-demo-routing.module';
import { MultipleOutletsDemoComponent } from './multiple-outlets-demo.component';
import { 
  MultipleOutletsUsersComponent, MultipleOutletsRolesComponent, MultipleOutletsProfilesComponent
} from './multiple-outlets-components';

@NgModule({
  imports: [
    CommonModule,
    MultipleOutletsDemoRoutingModule
  ],
  declarations: [
    MultipleOutletsDemoComponent,
    MultipleOutletsUsersComponent, 
    MultipleOutletsRolesComponent, 
    MultipleOutletsProfilesComponent
  ]
})
export class MultipleOutletsDemoModule { }
