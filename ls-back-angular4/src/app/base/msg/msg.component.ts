import {
  Component, OnInit, Input, Output, EventEmitter
} from '@angular/core';
import { AlertEnum } from "../enums/alert-enum";

@Component({
  selector: 'my-msg',
  template: `
  <div style="position: absolute;z-index: 200;left:50%;margin-left:-130px;width:260px;" *ngIf="msgFlag">
    <div class="alert {{alertClass}} alert-dismissible">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      <h4>{{msgLabel}}</h4>
      <div style="min-width:100px;">{{msg}}</div>
    </div>
  </div>`
})

export class MsgComponent implements OnInit {
  @Input() public timeOut: number = 3000;
  @Input() public msgLabel: string = '提示！';
  @Input() public alert: AlertEnum = AlertEnum.Warning;
  @Output() public msg_: EventEmitter<string> = new EventEmitter<string>();

  public _msg: string;
  public msgFlag: boolean;
  public alertClass: string;
  public msgStr: string = '这是一个提示信息';

  ngOnInit(): void {
    this.msgFlag = false;
    this._msg = this.msgStr;
    this.msg_.emit(this._msg);
  }

  @Input()
  public get msg(): string {
    return this._msg;
  }

  public set msg(msg: string) {
    if (msg == this.msgStr) {
      return;
    }
    if (!msg || msg == '') {
      return;
    }
    this._msg = msg;
    this.showMsg();
  }

  showMsg() {
    this.msgFlag = true;
    switch (this.alert) {
      case AlertEnum.Danger:
        this.alertClass = "alert-danger";
        break;
      case AlertEnum.Success:
        this.alertClass = "alert-success";
        break;
      case AlertEnum.Warning:
        this.alertClass = "alert-warning";
        break;
      default:
        this.alertClass = "alert-info";
        break;
    }
    setTimeout(() => {
      this.ngOnInit();
    }, this.timeOut);
  }
}
