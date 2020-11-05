import { Injectable } from "@angular/core";

import { HttpUtil } from "../../base/util/http.util";
import { SysMenu } from "./sys-menu";

@Injectable()
export class SysMenuService {
  private baseUrl = "/sys/menu";

  constructor(private httpUtil: HttpUtil) {
  }
  getLeftTree() {
    let url = this.baseUrl + "/leftTree";
    return this.httpUtil.get(url);
  }

  getTree() {
    let url = this.baseUrl + "/tree";
    return this.httpUtil.get(url);
  }

  getList() {
    let url = this.baseUrl + "/list";
    return this.httpUtil.get(url);
  }

  getById(menuId: string) {
    let url = this.baseUrl + "/getById/" + menuId;
    return this.httpUtil.get(url);
  }

  add(menu: SysMenu) {
    let url = this.baseUrl + "/add";
    return this.httpUtil.post(url, menu);
  }

  edit(menu: SysMenu) {
    let url = this.baseUrl + "/edit";
    return this.httpUtil.put(url, menu);
  }

  delete(id: any) {
    let url = this.baseUrl + "/" + id;
    return this.httpUtil.delete(url);
  }

}
