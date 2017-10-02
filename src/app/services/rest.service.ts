import {Headers, Http} from '@angular/http';
import {Cookie} from "ng2-cookies/ng2-cookies";

const X_API_KEY = '139e747a-5a75-4d3f-a55c-9b9678f11290';

export class RestService {

    public headers: Headers;

    constructor(protected _http: Http) {
        this.headers = new Headers();
        this.headers.append('X-API-KEY', X_API_KEY);
        let token = this.getAuthorization();
        if (token != null) {
            this.headers.append('Authorization', token);
        }
    }

    protected getAuthorization() {
        let token = Cookie.get("Authorization");
        console.log('token');
        console.log(token);
        return token;
    }

    protected get(url: string) {
        return this._http
            .get(url, { headers: this.headers});
    }

    protected handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}