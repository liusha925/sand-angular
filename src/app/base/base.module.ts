import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MsgComponent } from "./msg/msg.component";

@NgModule({
  imports: [BrowserModule],
  exports: [MsgComponent],
  providers: [],
  declarations: [MsgComponent]
})

export class BaseModule {

}
