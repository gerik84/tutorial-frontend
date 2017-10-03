import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AlertModule} from 'ngx-bootstrap';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import {CatalogComponent} from './components/catalog/catalog.component';
import {IndexComponent} from './components/index/index.component';
import {GoodsService} from './services/goods.service';
import {HttpClientModule} from '@angular/common/http';
import {PreloaderService} from './services/preloader.service';
import {PostService} from './services/post-service';
import {HttpService} from './services/http.service';

import {HttpModule, RequestOptions, XHRBackend} from '@angular/http';
import {PreloaderFull} from './components/preloader-full/preloader-full';
import {PreloaderSmall} from './components/preloader-small/preloader-small';
import {AuthorizationService} from "./services/authorization.service";
import {UserHttpService} from "./services/user.http.service";

export function httpServiceFactory(backend: XHRBackend, defaultOptions: RequestOptions, preloaderService: PreloaderService, authService: AuthorizationService) {
  return new UserHttpService(backend, defaultOptions, preloaderService, authService);
}
export function httpServiceFactory2(backend: XHRBackend, defaultOptions: RequestOptions, preloaderService: PreloaderService) {
  return new HttpService(backend, defaultOptions, preloaderService);
}

@NgModule({
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    CatalogComponent,
    IndexComponent,
    PreloaderFull,
    PreloaderSmall
  ],
  providers: [
    GoodsService,
    PreloaderService,
    AuthorizationService,
    PostService,
    {
      provide: HttpService,
      useFactory: httpServiceFactory2,
      deps: [XHRBackend, RequestOptions, PreloaderService]
    },
    {
      provide: UserHttpService,
      useFactory: httpServiceFactory,
      deps: [XHRBackend, RequestOptions, PreloaderService, AuthorizationService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
