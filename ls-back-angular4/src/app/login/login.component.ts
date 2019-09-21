import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Config } from "../app-config";
import { LoginService } from "./login.service";
import { AlertEnum } from "../base/enums/alert-enum";

@Component({
  selector: 'my-app',
  templateUrl: './login.component.html'
})


export class LoginComponent implements OnInit {
  msg: string;
  alert: AlertEnum = AlertEnum.Danger;

  app: any;
  username: string;
  password: string;
  constructor(private router: Router,
    private config: Config, private loginService: LoginService) {
    this.app = config.items;
  }

  ngOnInit() {

  }

  msg_(msg_: string) {
    this.msg = msg_;
  }

  check() {
    let result = true;
    if (!this.username) {
      this.msg = '用户名不能为空';
      result = false;
      return result;
    }
    if (!this.password) {
      this.msg = '密码不能为空';
      result = false;
      return result;
    }
    return result;
  }

  login() {
    if (!this.check()) {
      return;
    }
    this.router.navigate(['/sys/dashboard']);
  }
}
