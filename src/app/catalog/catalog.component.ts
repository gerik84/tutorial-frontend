import {Component, OnInit} from '@angular/core';
import {PreloadingStrategy, Route} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {GoodsService} from "../services/goods.service";
import {Goods} from "../models/Goods";

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html'
})

export class CatalogComponent implements OnInit, PreloadingStrategy {

  constructor(private goodService: GoodsService) {
  }

  goods: Goods[];

  ngOnInit(): void {
    this.goodService.getCatalog()
      .then(goods => {
        this.goods = goods;
        console.log(this.goods);
      });
  }

  preload(route: Route, load: Function): Observable<any> {
    // return route.data && route.data.preload ? load() : of(null);
    return null;
  }


}
