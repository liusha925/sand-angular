import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AppConfig } from "./app-config";

@Component({
  selector: 'app-index',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  app: any;
  title = 'ls-back';

  constructor(private router: Router, private config: AppConfig) {
    this.app = config.items;
  };

  ngOnInit(): void {
    this.router.navigate(['/index']);
  }
}
