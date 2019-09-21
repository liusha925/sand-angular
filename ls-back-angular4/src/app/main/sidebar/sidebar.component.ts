import { Component, OnInit } from '@angular/core';
import { Config } from '../../app-config';
import { Router } from "@angular/router";

import { SysMenuService } from "../../sys/menu/sys-menu.service";

@Component({
  selector: 'my-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  treeMenu: any[];
  app: any;
  selectedFirstMenuId: any;
  selectedSecondMenuId: any;
  selectedThirdMenuId: any;
  username: string;
  flag: boolean;

  constructor(private config: Config,
    private router: Router,
    private tMenuService: SysMenuService) {
    this.app = config.items;
    this.flag = false;
  }
  ngOnInit(): void {
    this.username = '流沙来了';
    this.selectedFirstMenuId = sessionStorage.getItem("firstMenu");
    this.selectedSecondMenuId = sessionStorage.getItem("secondMenu");
    this.selectedThirdMenuId = sessionStorage.getItem("thirdMenu");
    // 获取菜单信息
    this.tMenuService.getTree().subscribe(response => {
      this.treeMenu = response.data;
      console.log('菜单详情', this.treeMenu);
    });
  }

  selectFirstMenu(menu: any) {
    menu.isOpen = !menu.isOpen;
    if (menu.isOpen) {
      this.selectedFirstMenuId = menu.id;
      sessionStorage.setItem("firstMenu", this.selectedFirstMenuId);
    } else {
      this.selectedFirstMenuId = null;
      sessionStorage.setItem("firstMenu", null);
    }
    this.treeMenu.forEach(menu => {
      if (menu.id != this.selectedFirstMenuId) {
        menu.isOpen = false;
      }
    })
  }

  selectSecondMenu(menu: any) {
    menu.isOpen = !menu.isOpen;
    if (menu.isOpen) {
      this.selectedSecondMenuId = menu.id;
      sessionStorage.setItem("secondMenu", this.selectedSecondMenuId);
    } else {
      this.selectedFirstMenuId = null;
      sessionStorage.setItem("secondMenu", null);
    }
  }

  selectThirdMenu(menu: any, href: any) {
    console.log('selectThirdMenu：', menu, href);
    this.selectedThirdMenuId = menu.id;
    sessionStorage.setItem("thirdMenu", this.selectedThirdMenuId);
    this.router.navigate([href]);
  }
  
  toggle() {
    this.flag = !this.flag;
  }

}
