import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../product/product';
import {environment} from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ProductService {
  productUrl: String = environment.apiUrl + 'product';
  private product: Observable<Product>;

  constructor(private http: HttpClient) {
  }

  getProduct(id: String): Observable<any> {
    this.product = this.http.get<Product>(`${this.productUrl}/?id=${id}`);
    return this.product;
  }
}
