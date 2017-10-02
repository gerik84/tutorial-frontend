import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Goods} from '../models/Goods';
import {RestService} from './rest.service';
import {HttpService} from './http.service';


@Injectable()
export class GoodsService {

  constructor(private http: HttpService) {
  }

  getCatalog(): Promise<Goods[]> {
    // this.http.get('http://192.168.0.104:9000/catalog').subscribe(data => {
    //     // Read the result field from the JSON response.
    //     this.results = data.json() as Goods[];
    //     console.log(data.json());
    //     console.log('asdad');
    //     console.log(this.results[0]);
    // });
    return this.http
      .get('/catalog', null, 'full')
      .toPromise()
      .then(response => response.json() as Goods[])
      .catch(function (error) {
        console.error(error);
        return null;
      });
  }

}
