import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Config } from "../../app-config";

const options = new RequestOptions({
  withCredentials: true,
  headers: new Headers({
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': 'Bearer ' + localStorage.getItem('access_token')
  })
});

@Injectable()
export class HttpUtil {
  private baseUrl: any;
  constructor(private config: Config, private http: Http) {
    this.baseUrl = config.items.baseUrl;
  }

  get(url: string) {
    console.log('发送get请求，url：', url)
    url = this.baseUrl + url;
    return this.http.get(url, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  post(url: string, params?: any) {
    console.log('发送post请求，url：', url, '，params:', params);
    url = this.baseUrl + url;
    return this.http.post(url, params, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  put(url: string, params?: any) {
    console.log('发送put请求，url：', url, '，params:', params);
    url = this.baseUrl + url;
    return this.http.put(url, params, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  delete(url: string) {
    console.log('发送delete请求，url：', url);
    url = this.baseUrl + url;
    return this.http.delete(url, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  postFormLogin(url: string, params?: any) {
    let formData: FormData = new FormData();
    formData.append('username', params.username);
    formData.append('password', params.password);

    console.log('登录请求，url：', url, 'formData:', formData);
    url = this.baseUrl + url;
    let options = new RequestOptions({
      withCredentials: true,
      headers: new Headers({ 'X-Requested-With': 'XMLHttpRequest' })
    });
    return this.http.post(url, formData, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * 获取Response body
   * @param response 
   */
  extractData(response: Response) {
    console.log('提取数据：', response);
    let body = response.json();
    return body || {};
  }
  /**
   * 异常处理
   * @param error 
   */
  handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error('异常信息：', errMsg);
    return Observable.throw(errMsg);
  }

  /**
   * 存储Storage信息
   * @param data 
   */
  saveStorage(data: any) {
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('user_id', data.user_id);
    localStorage.setItem('real_name', data.real_name);
    localStorage.setItem('authorities', JSON.stringify(data.authorities));
    localStorage.setItem('expiration', data.expiration);
    localStorage.setItem('token_type', data.token_type);
    localStorage.setItem('login_date', new Date().toString());
  }

  /**
   * 清除Storage信息
   */
  clearStorage() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('real_name');
    localStorage.removeItem('authorities');
    localStorage.removeItem('expiration');
    localStorage.removeItem('token_type');
    localStorage.removeItem('login_date');
  }

}
