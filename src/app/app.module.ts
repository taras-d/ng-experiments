import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { ReactiveFormsDemoModule } from './reactive-forms-demo/reactive-forms-demo.module';
import { DynamicComponentsDemoModule } from './dynamic-components-demo/dynamic-components-demo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ReactiveFormsDemoModule,
    DynamicComponentsDemoModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
