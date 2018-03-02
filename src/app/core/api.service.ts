import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

export interface APIRequestOptions {
    params?: {[key: string]: any};
    headers?: {[key: string]: any};
    tokenize?: boolean;
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
    observe?: 'body' | 'response' | 'events';
    cacheable?: number;
}

@Injectable()
export class APIService {

    static readonly baseUrl = 'http://path/to/api';

    static readonly defaults = {
        tokenize: true,
        responseType: 'json',
        observe: 'body'
    };

    private cache: {
        [key: string]: { expire: Date | boolean, data: any }
    } = {};

    constructor(private http: HttpClient) {
        
    }

    get(path: string, options?: APIRequestOptions): Observable<any> {
        return this.request('GET', path, null, options);
    }

    post(path: string, body?: any, options?: APIRequestOptions): Observable<any> {
        return this.request('POST', path, body, options);
    }

    put(path: string, body?: any, options?: APIRequestOptions): Observable<any> {
        return this.request('PUT', path, body, options);
    }

    patch(path: string, body?: any, options?: APIRequestOptions): Observable<any> {
        return this.request('PATCH', path, body, options);
    }

    delete(path: string, body?: any, options?: APIRequestOptions): Observable<any> {
        return this.request('DELETE', path, body, options);
    }

    request(
        method: string,
        path: string, 
        body: any, 
        options: APIRequestOptions
    ): Observable<any> {
        method = method.toUpperCase();

        options = Object.assign({}, APIService.defaults, options);

        const url = this.getUrl(path);

        const cacheable = (
            method === 'GET' && options.cacheable && options.observe === 'body'
        );

        if (cacheable) {
            const data = this.getFromCache(url);
            if (data !== undefined) {
                return Observable.of(data);
            }
        }

        return this.http.request(method, url, {
            body,
            headers: this.getHeaders(options),
            params: options.params,
            responseType: options.responseType,
            observe: options.observe
        }).do(res => {
            if (cacheable) {
                this.saveToCache(url, options, res);
            }
        });
    }

    private getUrl(path: string): string {
        return `${APIService.baseUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
    }

    private getHeaders(options: APIRequestOptions): {[key: string]: any} {
        const headers = {};

        if (options.tokenize) {
            const token = this.getAuthToken();
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }
        }

        return Object.assign(headers, options.headers);
    }

    private getAuthToken(): string {
        return 'FAKE_TOKEN';
    }

    private getFromCache(url: string): any {
        const inCache = this.cache[url];
        return (inCache && inCache.expire > new Date())?
            inCache.data: undefined;
    }

    private saveToCache(url: string, options: APIRequestOptions, data: any): void {
        const expire = new Date();
        expire.setMinutes( expire.getMinutes() + options.cacheable );
        this.cache[url] = { expire, data };
    }

}