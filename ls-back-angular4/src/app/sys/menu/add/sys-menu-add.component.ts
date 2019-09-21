import { Location } from '@angular/common';
import { Component, OnInit, enableProdMode } from '@angular/core';

import { SysMenu } from "../sys-menu";
import { SysMenuService } from "../sys-menu.service";

import { CodeEnum } from "../../../base/enums/code-enum";
import { BaseComponent } from "../../../base/base.component";

enableProdMode();

@Component({
  templateUrl: './sys-menu-add.component.html',
})

export class SysMenuAddComponent extends BaseComponent implements OnInit {
  firstName: string = '基础配置';
  secondName: string = '菜单管理';

  msg: string = "";
  menu: any = new SysMenu();
  errorMessage: any;
  menuList: any;

  constructor(public location: Location, private menuService: SysMenuService) {
    super(location);
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.menuService.getList()
      .subscribe(data => this.menuList = data.data);
  }

  onSubmit() {
    console.log('新增菜单');
    if (!this.checkMenu(this.menu)) {
      return;
    }
    this.menuService.add(this.menu)
      .subscribe(data => {
        if (data.code == CodeEnum.SUCCESS) {
          this.msg = "添加成功";
          setTimeout(() => { super.goBack() }, 3000);
        } else {
          this.msg = "添加失败";
        }
      }, error => this.errorMessage = <any>error);
  }

  checkMenu(menu: SysMenu) {
    let result = true;
    if (!menu.parentId) {
      this.msg = '请选择父级菜单';
      result = false;
    } else if (!menu.menuName) {
      this.msg = '菜单名称不能为空';
      result = false;
    } else if (!menu.menuType) {
      this.msg = '请选择菜单类型';
      result = false;
    }
    return result;
  }

}

