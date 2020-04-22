import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Config } from "../app-config";
import { LoginService } from "./login.service";
import { AlertEnum } from "../base/enums/alert-enum";
import { CodeEnum } from 'app/base/enums/code-enum';
import { HttpUtil } from 'app/base/util/http.util';

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
    private config: Config,
    private httpUtil: HttpUtil,
    private loginService: LoginService) {
    this.app = config.items;
  }

  ngOnInit() {

  }

  msg_(msg_: string) {
    this.msg = msg_;
  }

  check() {
    if (!this.username) {
      this.msg = '用户名不能为空';
      return false;
    }
    if (!this.password) {
      this.msg = '密码不能为空';
      return false;
    }
    return true;
  }

  login() {
    if (!this.check()) {
      return;
    }
    this.loginService.login(this.username, this.password).subscribe(data => {
      console.log('登录响应参数：', data);
      if (data) {
        if (data.code == CodeEnum.SUCCESS) {
          this.httpUtil.saveStorage(data.data);
          this.router.navigate(['/sys/dashboard']);
        } else {
          this.msg = data.msg;
        }
      } else {
        this.msg = "服务失联了，正在紧急查找...";
      }
    });
  }
}
