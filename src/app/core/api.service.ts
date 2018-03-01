import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

export interface APIRequestOptions {
    params?: {[key: string]: any};
    headers?: {[key: string]: any};
    tokenize?: boolean;
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
    cacheable?: number;
}

@Injectable()
export class APIService {

    static readonly baseUrl = 'http://path/to/api';

    static readonly defaults = {
        tokenize: true,
        responseType: 'json'
    };

    private cache: {
        [key: string]: { expire: Date | boolean, data: any }
    } = {};

    constructor(private http: HttpClient) {
        
    }

    get(path: string, options?: APIRequestOptions): Observable<any> {
        return this.request('GET', path, null, options);
    }

    post(path: string, data?: any, options?: APIRequestOptions): Observable<any> {
        return this.request('POST', path, data, options);
    }

    put(path: string, data?: any, options?: APIRequestOptions): Observable<any> {
        return this.request('PUT', path, data, options);
    }

    patch(path: string, data?: any, options?: APIRequestOptions): Observable<any> {
        return this.request('PATCH', path, data, options);
    }

    delete(path: string, data?: any, options?: APIRequestOptions): Observable<any> {
        return this.request('DELETE', path, data, options);
    }

    request(
        method: string,
        path: string, 
        data: string, 
        options: APIRequestOptions
    ): Observable<any> {
        method = method.toUpperCase();

        options = Object.assign({}, APIService.defaults, options);

        const url = this.getUrl(path);

        if (method === 'GET' && options.cacheable) {
            const data = this.getFromCache(url, options);
            if (data !== undefined) {
                return Observable.of(data);
            }
        }

        const headers = this.getHeaders(options);

        const req = new HttpRequest(method, url, data, {
            headers: new HttpHeaders(headers),
            params: new HttpParams({ fromObject: options.params }),
            responseType: options.responseType
        });

        return this.http.request(req)
            .filter(res => res instanceof HttpResponse)
            .map(res => res['body'])
            .do(res => {
                if (options.cacheable) {
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

    private getFromCache(url: string, options: APIRequestOptions): any {
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