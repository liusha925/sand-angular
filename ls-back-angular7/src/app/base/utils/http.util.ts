import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { AppConfig } from '../../app-config';

const options = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class HttpClientUtil {
    private baseUrl: any;

    constructor(private config: AppConfig, private httpClient: HttpClient) {
        this.baseUrl = 'http://localhost:8080';
    }

    public get(url: string) {
        console.log('发送get请求，url：', url);
        url = this.baseUrl + url;
        return this.httpClient.get(url, options)
            .pipe(map(this.extractData), catchError(this.handleError));
    }

    public post(url: string, params?: any) {
        console.log('发送post请求，url：', url, '，params:', params);
        url = this.baseUrl + url;
        return this.httpClient.post(url, params, options)
            .pipe(map(this.extractData), catchError(this.handleError));

    }

    public put(url: string, params?: any) {
        console.log('发送put请求，url：', url, '，params:', params);
        url = this.baseUrl + url;
        return this.httpClient.put(url, params, options)
            .pipe(map(this.extractData), catchError(this.handleError));
    }

    public delete(url: string) {
        console.log('发送delete请求，url：', url);
        url = this.baseUrl + url;
        return this.httpClient.delete(url, options)
            .pipe(map(this.extractData), catchError(this.handleError));
    }

    postForm(url: string, params?: any) {
        let formData: FormData = new FormData();
        formData.append('username', params.username);
        formData.append('password', params.password);
        return this.post(url, formData);
      }

    private extractData(response: Response) {
        console.log('提取数据：', response);
        let data = response.json();
        return data || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const data = error.json() || '';
            const err = data.toString || JSON.stringify(data);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error('异常处理：', errMsg);
        return Observable.throw(errMsg);
    }
}
