import { Injectable } from "@angular/core";
import { HttpUtil } from "../base/util/http.util";

@Injectable()
export class LoginService {
  constructor(private httpUtil: HttpUtil) {

  }

  login(username: string, password: string) {
    let param = { 'username': username, 'password': password };
    let url = "/auth/user/login";
    return this.httpUtil.postFormLogin(url, param);
  }

  checkLogin() {
    var token = localStorage.getItem('access_token');// token
    if (token == null) {
      console.log("token不存在！");
      return false;
    }
    var nowDate = new Date();//当前时间
    var loginDate = new Date(localStorage.getItem('login_date'));//登录时间
    var expiration = JSON.parse(localStorage.getItem('expiration'));//有效时长/秒
    console.log("登录日期：", loginDate, "当前日期：", nowDate, "有效时长/秒：", expiration);
    var betweenTime = (nowDate.getTime() - loginDate.getTime()) / 1000;//登录时长/秒
    var expiredTime = expiration - betweenTime ;//剩余时长/秒
    console.log("登录时长/秒：", betweenTime, "剩余时长/秒：", expiredTime);
    if (expiredTime <= 0) {
      console.log("登录已过期！");
      this.httpUtil.clearStorage();
      return false;
    }
    return true;
  }

}
