import { Injectable } from "@angular/core";
import { HttpUtil } from "../base/util/http.util";

@Injectable()
export class LoginService {
  constructor(private httpUtil: HttpUtil) {

  }

  login(username: string, password: string) {
    let param = { 'username': username, 'password': password };
    console.log(param);
    let url = "/auth/login";
    return this.httpUtil.postFormLogin(url, param);
  }

  checkLogin() {
    // 获取token
    var token = sessionStorage.getItem('access_token');
    if (token == null) {
      return false;
    }
    // 获取过期时间
    var expiration = sessionStorage.getItem('expiration');
    return true;
  }

}
