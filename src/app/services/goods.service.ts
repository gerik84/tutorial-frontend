import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Goods} from '../models/Goods';
import {RestService} from './rest.service';


@Injectable()
export class GoodsService extends RestService {


    constructor(protected http: Http) {
        super(http);
    }

    getCatalog(): Promise<Goods[]> {
        // this.http.get('http://192.168.0.104:9000/catalog').subscribe(data => {
        //     // Read the result field from the JSON response.
        //     this.results = data.json() as Goods[];
        //     console.log(data.json());
        //     console.log('asdad');
        //     console.log(this.results[0]);
        // });
        return this
            .get('http://192.168.0.104:9000/catalog')
            .toPromise()
            .then(response => response.json() as Goods[])
            .catch(this.handleError);
    }



}