import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AlertModule} from 'ngx-bootstrap';
import {NavbarComponent} from './navbar.component';
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';
import {AppRoutingModule} from "./app-routing.module";
import {CatalogComponent} from "./catalog.component";
import {IndexComponent} from "./index.component";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HeaderComponent,
        FooterComponent,
        CatalogComponent,
        IndexComponent
    ],
    imports: [
        BrowserModule,
        AlertModule.forRoot(),
        AppRoutingModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
