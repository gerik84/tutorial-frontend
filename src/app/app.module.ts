import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AlertModule} from 'ngx-bootstrap';
import {NavbarComponent} from './navbar.component';
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';
import {AppRoutingModule} from './app-routing.module';
import {CatalogComponent} from './catalog.component';
import {IndexComponent} from './index.component';
import {GoodsService} from './services/goods.service';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [
        HttpModule,
        HttpClientModule,
        BrowserModule,
        AlertModule.forRoot(),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        HeaderComponent,
        FooterComponent,
        CatalogComponent,
        IndexComponent,
    ],
    providers: [GoodsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
