import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsDemoModule } from './reactive-forms-demo/reactive-forms-demo.module';
import { DynamicComponentsDemoModule } from './dynamic-components-demo/dynamic-components-demo.module';
import { AnimationsDemoModule } from './animations-demo/animations-demo.module';
import { TestBenchModule } from './test-bench/test-bench.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ReactiveFormsDemoModule,
    DynamicComponentsDemoModule,
    AnimationsDemoModule,
    TestBenchModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
