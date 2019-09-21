import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { Config } from "../app-config";
import { SysModule } from "../sys/sys.module";
import { MainRoutingModule } from "./main-routing.module";

import { MainComponent } from './main.component';
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  imports: [
    BrowserModule, FormsModule,
    BsDropdownModule.forRoot(),
    HttpModule, JsonpModule,
    MainRoutingModule,
    SysModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  providers: [
    Config
  ]
})

export class MainModule {

}
