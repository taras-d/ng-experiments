import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { AppInitializerService } from './app-intializer.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiService,
    AppInitializerService,
    AppInitializerService.factory
  ]
})
export class CoreModule { }
