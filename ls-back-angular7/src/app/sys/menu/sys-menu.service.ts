import { Injectable } from "@angular/core";
import { HttpClientUtil } from "../../base/utils/http-client.util";
import { SysMenu } from "./sys-menu";

/**
 * 服务调用
 */
@Injectable()
export class SysMenuService {
  private baseUrl = "/sys/menu";
  constructor(private httpUtil: HttpClientUtil) {
  }

  left() {
    let url = this.baseUrl + "/left";
    return this.httpUtil.get(url);
  }

  page() {
    let url = this.baseUrl + "/page";
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
}
