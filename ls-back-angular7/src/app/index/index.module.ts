import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { IndexRoutingModule } from "./index-routing.module";

import { AppConfig } from "../app-config";
import { IndexComponent } from './index.component';
import { HeaderComponent } from "../base/header/header.component";
import { FooterComponent } from '../base/footer/footer.component';
import { SysDashboardComponent } from '../sys/dashboard/sys-dashboard.component';
import { SysLeftComponent } from '../sys/left/sys-left.component';

import { SysMenuService } from "../sys/menu/sys-menu.service";

import { HttpClientUtil } from "../base/utils/http-client.util";

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    JsonpModule,
    BrowserModule,
    IndexRoutingModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [
    HeaderComponent, IndexComponent, FooterComponent, SysDashboardComponent, SysLeftComponent
  ],
  providers: [
    AppConfig, SysMenuService, HttpClientUtil
  ]
})
export class IndexModule {

}
