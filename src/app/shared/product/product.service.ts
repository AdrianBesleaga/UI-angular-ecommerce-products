import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../product/product';
import {ActivatedRoute} from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ProductService {
  productUrl: String = 'http://localhost:8088/product';
  id: String;
  private sub: any;
  private product: Observable<Product>;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  getProduct(): Observable<any> {
    this.sub = this.route.queryParams.subscribe(params => {
      if (params['id'] != null) {
        this.id = params['id']; // (+) converts string 'id' to a number
        console.log(this.id);
        console.log(params);
      }
    });
    // if (!id.trim()) {
    //   // if not search term, return empty hero array.
    //   return of([]);
    // }
    console.log('must be a valid id : ' + this.id);
    this.product = this.http.get<Product>(`${this.productUrl}/?id=${this.id}`);

    return this.product;
  }


}
