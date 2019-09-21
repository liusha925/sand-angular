import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { AppConfig } from "../../app-config";

const options = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable()
export class HttpClientUtil {
    public baseUrl: string;
    public http: HttpClient;

    constructor(private config: AppConfig, httpClient: HttpClient) {
        this.baseUrl = config.items.baseUrl;
        this.http = httpClient;
    }

    public get(url: any, params?: Object, cb?: Function) {
        let httpParams = new HttpParams();
        console.log('get开始请求');
        const vm = this;
        if (params) {
            for (const key in params) {
                if (params[key] === false || params[key]) {
                    httpParams = httpParams.set(key, params[key]);
                }
            }
        }
        return vm.http.get(vm.baseUrl + url, { params: httpParams });
    }

    public post(url: any, data?: Object, cb?: Function) {
        console.log('post开始请求');
        const vm = this;
        vm.http.post(vm.baseUrl + url, data, options)
            .subscribe(res => {
                console.log('post请求结束', res);
                cb(res);
            });
    }

    public put(url: any, data?: Object, cb?: Function) {
        console.log('put开始请求');
        const vm = this;
        vm.http.put(vm.baseUrl + url, data, options)
            .subscribe(res => {
                console.log('put请求结束', res);
                cb(res);
            });
    }

    public delete(url: any, params?: Object, cb?: Function) {
        let httpParams = new HttpParams();
        console.log('delete开始请求');
        const vm = this;
        if (params) {
            for (const key in params) {
                if (params[key]) {
                    httpParams = httpParams.set(key, params[key]);
                }
            }
        }
        vm.http.delete(vm.baseUrl + url, { params: httpParams })
            .subscribe(data => {
                console.log('delete请求结束', data);
                cb(data);
            });
    }

}