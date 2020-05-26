import { Component, OnInit } from '@angular/core';
import { Config } from '../../app-config';
import { Router } from "@angular/router";

import { SysMenuService } from "../../sys/menu/sys-menu.service";

@Component({
  selector: 'my-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  app: any;
  flag: boolean;
  treeMenu: any[];
  username: string;
  selectedFirstMenuId: any;
  selectedSecondMenuId: any;
  selectedThirdMenuId: any;

  constructor(private router: Router, private config: Config, private tMenuService: SysMenuService) {
    this.flag = false;
    this.app = config.items;
  }
  
  ngOnInit(): void {
    this.username = localStorage.getItem('real_name');
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

  selectSecondMenuHref(menu: any, href: any) {
    console.log('selectSecondMenu：', menu, href);
    this.selectedSecondMenuId = menu.id;
    sessionStorage.setItem("secondMenu", this.selectedSecondMenuId);
    this.router.navigate([href]);
  }

  selectThirdMenuHref(menu: any, href: any) {
    console.log('selectThirdMenu：', menu, href);
    this.selectedThirdMenuId = menu.id;
    sessionStorage.setItem("thirdMenu", this.selectedThirdMenuId);
    this.router.navigate([href]);
  }

  toggle() {
    this.flag = !this.flag;
  }

}
