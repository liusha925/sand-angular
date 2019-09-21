import { Component, OnInit } from '@angular/core';

import { AppConfig } from '../../app-config';

@Component({
  selector: 'app-left',
  templateUrl: './sys-left.component.html'
})
export class SysLeftComponent implements OnInit {
  app: any;

  constructor(private config: AppConfig) {
    this.app = config.items;
  }
  ngOnInit(): void {
  }

}
