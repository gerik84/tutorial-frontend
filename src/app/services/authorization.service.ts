import {Injectable} from '@angular/core';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {UserModel} from '../models/user.model';
import {UserHttpService} from './user.http.service';
import {HttpService} from "./http.service";

@Injectable()
export class AuthorizationService {

  public user_session: string = null;

  constructor(private http: HttpService) {
    this.user_session = Cookie.get('user_session');
  }

  public signup() {
    let user = new UserModel();
    user.name = 'name';
    user.email = 'email';

    const body = JSON.stringify(user);

    if (this.user_session == null) {
      this.http.post('/signup', body, null)
        .subscribe(
          resp => {
            console.log(resp.accessToken);
            Cookie.set('user_session', resp.accessToken);
          },
          error => console.error(error)
        );
    }

  }

}
