import { Component, OnInit } from '@angular/core';
import { Config } from "../app-config";
import { Router } from "@angular/router";

@Component({
  selector: 'my-app',
  templateUrl: './main.component.html'
})

export class MainComponent implements OnInit {
  app: any;
  constructor(private config: Config, private router: Router) {
    this.app = config.items;
  }

  ngOnInit() {

  }
}
