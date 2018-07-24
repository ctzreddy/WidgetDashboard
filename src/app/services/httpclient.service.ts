import { BadResponseHandler } from './../handlers/index';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';



@Injectable()
export class HttpClient {

    private static POST_HEADERS = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    private static POST_OPTIONS = new RequestOptions({ headers: HttpClient.POST_HEADERS });
    private static GET_HEADERS = new Headers({ 'Accept': 'application/json' });
    private static GET_OPTIONS = new RequestOptions({ headers: HttpClient.GET_HEADERS });
    private rootUrl: string;
    private getOptions: RequestOptions;
    private postOptions: RequestOptions;

    constructor(
        private http: Http,
        private badResponseHandler: BadResponseHandler) {

        const host = 'http://localhost' + '/';
        const root = 'insightmi.webapi' + '/';
        this.rootUrl = host + root;
        this.getOptions = HttpClient.GET_OPTIONS;
        this.postOptions = HttpClient.POST_OPTIONS;
    }

    public get(path: string, options?: RequestOptions): Observable<Response> {
        return this.http.get(`${this.rootUrl}${path}`, this.mergeOptions(options, this.getOptions))
            .catch((error) => {
                return this.badResponseHandler.handleBadResponse(error);
            });
    }
    /** Performs a request with `post` http method.*/
    public post(path: string, body: any, options?: RequestOptions): Observable<Response> {
        body = JSON.stringify(body);
        return this.http.post(`${this.rootUrl}${path}`, body, this.mergeOptions(options, this.postOptions))
            .catch((error) => {
                return this.badResponseHandler.handleBadResponse(error);
            });
    }

    public delete(path: string, options?: RequestOptions): Observable<Response> {
        return this.http.delete(`${this.rootUrl}${path}`, this.mergeOptions(options, this.postOptions))
            .catch((error) => {
                return this.badResponseHandler.handleBadResponse(error);
            });
    }

    private mergeOptions(options: RequestOptions, defaultOptions: RequestOptions): RequestOptions {

        // Appending imi tokens to all requests if available
        const imitkn = window.localStorage.getItem('imitkn');
        if (imitkn && imitkn !== null) {
            defaultOptions.headers.set('imitkn', imitkn);
        }

        if (!options) {
            // Just return default
            return defaultOptions;
        }
        const merged = options.merge(defaultOptions);

        // `merge` function will _replace_ existing `headers` completely, rather than merge them, so we need to do it manually
        if (options.headers) {
            merged.headers = options.headers;
        } else {
            merged.headers = new Headers();
        }

        // Defaults will override existing values
        defaultOptions.headers.forEach((values, name) => {
            merged.headers.set(name, values);
        });

        return merged;
    }
}
