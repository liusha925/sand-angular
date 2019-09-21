import { Component, OnInit, enableProdMode } from "@angular/core";
import { Router } from "@angular/router";
import { SysMenuService } from "../sys-menu.service";
import { SysMenu } from "../sys-menu";

enableProdMode();
@Component({
  templateUrl: './sys-menu-page.component.html',
})

export class SysMenuPageComponent implements OnInit {
  msg: string;
  menuTree: any[];
  firstName: string = '基础配置';
  secondName: string = '菜单管理';

  constructor(private router: Router, private menuService: SysMenuService) {
  }

  msg_(msg_: string) {
    this.msg = msg_;
  }

  ngOnInit(): void {
    if (true) {
      this.page();
    }
  }

  page() {
    let test = this.menuService.page();
  }

}
