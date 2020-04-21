import { Location } from "@angular/common";
import { Component, OnInit, enableProdMode } from "@angular/core";
import { Router } from "@angular/router";

import { SysMenuService } from "../sys-menu.service";
import { SysMenu } from "../sys-menu";
import { BaseComponent } from "app/base/base.component";

enableProdMode();
@Component({
  templateUrl: './sys-menu-page.component.html'
})

export class SysMenuPageComponent extends BaseComponent implements OnInit {
  firstName: string = '基础配置';
  secondName: string = '菜单管理';
  msg: string = "";
  // 菜单级别按钮权限控制
  viewMenuButton: boolean = true;
  addMenuButton: boolean = true;
  editMenuButton: boolean = true;
  deleteMenuButton: boolean = true;
  menuTree: any[];
  selectedMenu: SysMenu = new SysMenu();

  constructor(public loaction: Location,
    private router: Router, private menuService: SysMenuService) {
    super(loaction);
  }

  ngOnInit(): void {
    if (this.viewMenuButton) {
      this.getTree();
    }
  }

  getTree() {
    this.menuService.getTree().subscribe(data => {
      this.menuTree = data.data;
      this.menuTree.forEach((menu) => {
        menu.parentId = null;
      });
    })
  }

  selectedRecord(menu: any) {
    this.selectedMenu = menu;
    this.selectedMenu.menuId = menu.id;
  }

  editMenu() {
    if (!this.selectedMenu.menuId) {
      this.msg = "请选择菜单";
    } else {
      this.router.navigate(['/sys/menu/edit'], { queryParams: { menuId: this.selectedMenu.menuId } });
    }
  }

}
