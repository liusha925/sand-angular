import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MsgComponent } from "./msg.component";

@NgModule({
  imports: [BrowserModule
  ],
  exports: [MsgComponent],
  declarations: [MsgComponent]
})
export class MsgModule {

}
