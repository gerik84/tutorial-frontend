import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatalogComponent} from "./catalog.component";
import {CatalogRoutingModule} from "./catalog-routing.module";


@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingModule
  ],
  declarations: [CatalogComponent]
})
export class CatalogModule { }
