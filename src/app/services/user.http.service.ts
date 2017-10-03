import {HttpService} from './http.service';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {ConnectionBackend, RequestOptions} from '@angular/http';
import {PreloaderService} from './preloader.service';
import {AuthorizationService} from './authorization.service';

export class UserHttpService extends HttpService {

  constructor(backend: ConnectionBackend,
              defaultOptions: RequestOptions,
              preloaderService: PreloaderService,
              protected authService: AuthorizationService) {
    super(backend, defaultOptions, preloaderService);

    console.debug('this.authService.user_session');
    console.debug(this.authService.user_session);

    this.headers.append('Authorization', this.authService.user_session);
  }

}
