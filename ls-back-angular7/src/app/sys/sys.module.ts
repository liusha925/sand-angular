import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SysRoutingModule } from './sys-routing.module';

import { AppConfig } from "../app-config";
import { HeaderComponent } from "../base/header/header.component";
import { FooterComponent } from '../base/footer/footer.component';
import { SysDashboardComponent } from './dashboard/sys-dashboard.component';
import { SysLeftComponent } from './left/sys-left.component';

import { SysMenuService } from "./menu/sys-menu.service";

import { HttpClientUtil } from "../base/utils/http-client.util";

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    JsonpModule,
    BrowserModule,
    SysRoutingModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [
    HeaderComponent, FooterComponent, SysDashboardComponent, SysLeftComponent
  ],
  providers: [
    AppConfig, SysMenuService, HttpClientUtil
  ]
})
export class sysModule {

}
