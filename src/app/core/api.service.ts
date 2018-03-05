import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

export interface APIRequestOptions {
    params?: {[key: string]: any};
    headers?: {[key: string]: any};
    tokenize?: boolean;
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
    observe?: 'body' | 'response' | 'events';
    cacheable?: number | boolean;
}

@Injectable()
export class ApiService {

    static readonly baseUrl = 'http://url/to/api';
    
    static readonly defaultOptions = {
        tokenize: true,
        responseType: 'json',
        observe: 'body'
    };

    private cache: {
        [key: string]: { pending: Observable<any>, data: Observable<any>, expire: Date }
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

        // Merge options with default options
        options = Object.assign({}, ApiService.defaultOptions, options);

        // Get absolute url
        const url = this.getUrl(path);

        // Detect whether request cacheable or not
        const cacheable = (
            options.cacheable && method === 'GET' && 
            ['body', 'response'].includes(options.observe)
        );

        // Try to return data from cache
        if (cacheable) {
            const cached = this.getFromCache(url);
            if (cached) {
                return cached;
            }
        }

        // Create http request
        let obs = this.http.request(method, url, {
            body,
            headers: this.getHeaders(options),
            params: options.params,
            responseType: options.responseType,
            observe: options.observe
        });

        // Make request cacheable
        if (cacheable) {
            obs = this.makeCacheable(obs, url, options);
        }

        return obs;
    }

    private getUrl(path: string): string {
        return `${ApiService.baseUrl}/${path}`.replace(/([^:]\/)\/+/g, '$1');
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

    private makeCacheable(obs: Observable<any>, url: string, options: APIRequestOptions): Observable<any> {
        let expire;

        if (typeof options.cacheable === 'number') {
            expire = new Date();
            expire.setMinutes( expire.getMinutes() + options.cacheable );
        } else if (options.cacheable) {
            expire = null;
        } else {
            return obs;
        }

        obs = obs.share().do(res => {
            this.cache[url].pending = null;
            this.cache[url].data = Observable.of(res);
        });

        this.cache[url] = { pending: obs, data: null, expire };

        return obs;
    }

    private getFromCache(url: string): Observable<any> {
        const inCache = this.cache[url];
        if (inCache && (inCache.expire === null || inCache.expire > new Date())) {
            return inCache.pending || inCache.data;
        } else {
            return null;
        }
    }

}