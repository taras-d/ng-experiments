import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppStartService } from './app-start.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appStart => () => appStart.load(),
      deps: [AppStartService],
      multi: true
    }
  ]
})
export class CoreModule { }
