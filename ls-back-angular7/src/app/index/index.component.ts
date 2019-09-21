import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AppConfig } from "../app-config";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  app: any;

  constructor(private config: AppConfig, private router: Router) {
    this.app = config.items;
  }

  ngOnInit() {
  }

}
