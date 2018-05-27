import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../product/product';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ProductService {
  productUrl: String = 'http://localhost:8088/product';

  constructor(private http: HttpClient) {
  }

  getProduct(id): Observable<any> {
    // if (!id.trim()) {
    //   // if not search term, return empty hero array.
    //   return of([]);
    // }
    return this.http.get<Product>(`${this.productUrl}/?id=` + id);
  }

}
