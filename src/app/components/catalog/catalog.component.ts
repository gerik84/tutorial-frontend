import {Component, OnInit} from '@angular/core';
import {Goods} from '../../models/Goods';
import {GoodsService} from "../../services/goods.service";
import {Config} from "../../config";
import {Router} from "@angular/router";

@Component({
    selector: 'catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['catalog.scss']
})

export class CatalogComponent implements OnInit {

    router: Router;

    constructor(private goodService: GoodsService, _router: Router) {
        this.baseUrl = Config.api;
        this.router = _router;
    }

    goods: Goods[];
    baseUrl: String;

    ngOnInit(): void {
        this.goodService.getCatalog().then(goods => {
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

    click(event, item): boolean {
        this.router.navigate(['/goods/' + item.id]);
        return false;
    }

}
