import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PaginationModule } from "ngx-bootstrap/index";
import { AmexioWidgetModule, CommonHttpService } from 'amexio-ng-extensions';

import { Config } from "../app-config";
import { SysRoutingModule } from "./sys-routing.module";
import { MsgModule } from "../base/msg/msg.module";

import { MsgComponent } from "../base/msg/msg.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SysMenuPageComponent } from "./menu/page/sys-menu-page.component";
import { SysMenuAddComponent } from "./menu/add/sys-menu-add.component";
import { SysMenuEditComponent } from "./menu/edit/sys-menu-edit.component";

import { SysMenuService } from "./menu/sys-menu.service";

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    PaginationModule.forRoot(),
    AmexioWidgetModule,
    SysRoutingModule,
    MsgModule
  ],
  providers: [
    CommonHttpService,
    Config,
    SysMenuService
  ],
  declarations: [
    // MsgComponent,
    DashboardComponent,
    SysMenuPageComponent,
    SysMenuAddComponent,
    SysMenuEditComponent
  ]
})

export class SysModule {

}
