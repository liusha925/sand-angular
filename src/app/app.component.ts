import { Component, OnInit } from '@angular/core';
import { Config } from "./app-config";
import { Router } from "@angular/router";
import { LoginService } from './login/login.service';

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`
})

export class AppComponent implements OnInit {
  app: any;
  constructor(private router: Router,
    private config: Config,
    private loginService: LoginService) {
    this.app = config.items;
  };

  ngOnInit() {
    this.checkLogin();
  }

  checkLogin() {
    let isLogin = this.loginService.checkLogin();
    if (!isLogin) {
      this.router.navigate(['/login']);
    }
  }

}
