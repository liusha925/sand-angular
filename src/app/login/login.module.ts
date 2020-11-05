import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";

import { Config } from "../app-config";
import { BaseModule } from "../base/base.module";
import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginService } from "./login.service";

@NgModule({
  imports: [
    BrowserModule, FormsModule,
    HttpModule, JsonpModule,
    LoginRoutingModule,
    BaseModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    Config,
    LoginService
  ]
})

export class LoginModule {

}
