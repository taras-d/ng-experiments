import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

export interface APIRequestOptions {
    params?: {[key: string]: any};
    headers?: {[key: string]: any};
    tokenize?: boolean;
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
}

@Injectable()
export class APIService {

    static readonly baseUrl = 'http://path/to/api';

    static readonly defaults = {
        tokenize: true,
        responseType: 'json'
    };

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
        options = Object.assign({}, APIService.defaults, options);

        const url = this.getUrl(path);

        const headers = this.getHeaders(options);

        const req = new HttpRequest(method, url, data, {
            headers: new HttpHeaders(headers),
            params: new HttpParams({ fromObject: options.params }),
            responseType: options.responseType
        });

        return this.http.request(req)
            .filter(res => res instanceof HttpResponse)
            .map((res: any) => res.body);
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

}