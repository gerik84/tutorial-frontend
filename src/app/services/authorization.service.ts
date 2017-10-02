import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthorizationService {

  constructor(private http: HttpService) {

  }

  public signup() {
    console.error("AAAAAAAAAAAA");
    let headers = new Headers({
      'Content-Type': 'application/json;charset=utf-8',
      'X-API-KEY': '139e747a-5a75-4d3f-a55c-9b9678f11290'
    });
    const body = JSON.stringify([]);

    this.http.post('/signup', body, headers)
      .map((resp: Response) => {
        console.error("Asda!sd");

        let res = resp.json();
        console.log(res);
      })
      .catch((error: any) => {
        console.error("Asda!!!!sd");

        return Observable.throw(error);
      });
  }

  public signInGuest() {
    // this.http.postDa();
  }

}
