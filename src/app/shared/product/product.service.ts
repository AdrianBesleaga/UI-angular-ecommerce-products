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
  private productUrl: String = environment.apiUrl + 'products';
  private product: Observable<Product>;
  private products: Observable<Product[]>;

  constructor(private http: HttpClient) {
  }

  getProduct(id: String): Observable<Product> {
    this.product = this.http.get <Product>(`${this.productUrl}/${id}`);
    return this.product;
  }

  getProducts(): Observable<Product[]> {
    this.products = this.http.get<Product[]>(`${this.productUrl}`);
    return this.products;
  }
}
