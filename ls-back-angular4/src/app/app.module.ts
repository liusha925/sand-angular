import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";

import { Config } from "./app-config";
import { HttpUtil } from "./base/util/http.util";
import { CryptUtil } from "./base/util/crypt.util";
import { AppComponent } from './app.component';
import { MainModule } from "./main/main.module";
import { LoginModule } from "./login/login.module";
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    MainModule
  ],
  providers: [
    Config,
    HttpUtil,
    CryptUtil,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule {

}
