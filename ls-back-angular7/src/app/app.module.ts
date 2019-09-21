import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexModule } from "./index/index.module";
import { AppRoutingModule } from './app-routing.module';

import { AppConfig } from "./app-config";
import { HttpClientUtil } from "./base/utils/http-client.util";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule
  ],
  providers: [AppConfig, HttpClientUtil],
  bootstrap: [AppComponent]
})
export class AppModule { }
