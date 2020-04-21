import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Config } from "../app-config";
import { LoginService } from "./login.service";
import { AlertEnum } from "../base/enums/alert-enum";
import { CodeEnum } from 'app/base/enums/code-enum';

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
    private loginService: LoginService) {
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
    this.loginService.login(this.username, this.password).subscribe(data => {
      console.log('登录响应参数：', data);
      if (data) {
        if (data.code == CodeEnum.SUCCESS) {
          sessionStorage.setItem('access_token', JSON.stringify(data.data.access_token));
          sessionStorage.setItem('user_id', JSON.stringify(data.data.user_id));
          sessionStorage.setItem('real_name', JSON.stringify(data.data.real_name));
          sessionStorage.setItem('authorities', JSON.stringify(data.data.authorities));
          sessionStorage.setItem('expiration', JSON.stringify(data.data.expiration));
          sessionStorage.setItem('token_type', JSON.stringify(data.data.token_type));
          this.router.navigate(['/sys/dashboard']);
        } else {
          this.msg = data.msg;
        }
      } else {
        this.msg = "登录失联了，正在紧急查找...";
      }
    });
  }
}
