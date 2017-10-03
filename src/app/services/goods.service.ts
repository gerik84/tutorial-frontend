import {Injectable} from '@angular/core';

import 'rxjs/add/operator/toPromise';

import {Goods} from '../models/Goods';
import {UserHttpService} from './user.http.service';


@Injectable()
export class GoodsService {

  constructor(private http: UserHttpService) {
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
