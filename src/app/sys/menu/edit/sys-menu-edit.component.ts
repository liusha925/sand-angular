import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, enableProdMode } from '@angular/core';

import { SysMenu } from "../sys-menu";
import { SysMenuService } from "../sys-menu.service";

import { BaseComponent } from 'app/base/base.component';
import { CodeEnum } from "../../../base/enums/code-enum";

enableProdMode();

@Component({
  templateUrl: '../add/sys-menu-add.component.html',
})

export class SysMenuEditComponent extends BaseComponent implements OnInit {
  msg: string = "";
  menu: any = new SysMenu();
  errorMessage: any;
  firstName: string = '基础配置';
  secondName: string = '菜单管理';
  menuList: any;
  constructor(public location: Location,
    private route: ActivatedRoute,
    private menuService: SysMenuService
  ) {
    super(location);
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(queryParams => this.menuService.getById(queryParams.menuId)
        .subscribe(data => this.menu = data.data)
      );
    this.getList();
  }

  getList() {
    this.menuService.getList()
      .subscribe(data => this.menuList = data.data);
  }

  onSubmit() {
    if (!this.checkMenu(this.menu)) {
      return;
    }
    this.menuService.edit(this.menu)
      .subscribe(data => {
        if (data.code == CodeEnum.SUCCESS) {
          this.msg = "修改成功";
          setTimeout(() => { super.goBack() }, 3000);
        } else {
          this.msg = "修改失败";
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

