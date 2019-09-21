import { Component, OnInit } from '@angular/core';
import { Config } from '../../app-config';
import { Router } from "@angular/router";

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
  app: any;
  username: string;

  sidebar: boolean = true;
  constructor(private config: Config,
    private router: Router) {
    this.app = config.items;
    this.username = '流沙来了';
  }

  ngOnInit(): void {
  }

  logout() {
      top.location.href = "/";
  }

  dropdownToggle() {
    this.sidebar = !this.sidebar;
    if (this.sidebar) {
      document.getElementsByTagName("body").item(0).classList.remove('sidebar-collapse');
    } else {
      document.getElementsByTagName("body").item(0).classList.add('sidebar-collapse');
    }

  }
}
