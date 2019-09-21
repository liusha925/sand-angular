/**
 * Created by F1 on 2017/6/8.
 */
import { Component, OnInit } from '@angular/core';
import { Config } from "./app-config";
import { Router } from "@angular/router";

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`
})

export class AppComponent implements OnInit {
  app: any;
  constructor(private router: Router, private config: Config) {
    this.app = config.items;
  };
  
  ngOnInit() {
    this.checkLogin();
  }

  checkLogin() {
    this.router.navigate(['/main']);
  }

}
