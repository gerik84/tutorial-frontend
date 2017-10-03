import {Component, OnInit} from '@angular/core';
import {Goods} from '../../models/Goods';
import {GoodsService} from "../../services/goods.service";
import {Config} from "../../config";

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.sass']
})

export class CatalogComponent implements OnInit {

  constructor(private goodService: GoodsService) {
  }

  goods: Goods[];

  ngOnInit(): void {
    this.goodService.getCatalog()
      .then(goods => {
        let count = 0;
        goods.forEach(item => {
            count++;
            try {
              if (item.cover != null) {
              }
            } catch (ex) {
              console.error(item);
              console.error(item);
              console.error(item.cover);
              console.error(ex);
            }
        });

        this.goods = goods;
        console.log(this.goods);
      });
  }

}
