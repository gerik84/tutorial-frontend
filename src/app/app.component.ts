import {Component, OnInit} from '@angular/core';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {AuthorizationService} from './services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private authorization: AuthorizationService) {

  }

  ngOnInit(): void {
    this.authorization.signup();

    /* const user_session_field = 'user_session';
     let user_session = Cookie.get(user_session_field);
     if (user_session != null) {
       this.authorization.signInGuest();
     }*/
  }
}
