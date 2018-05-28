import {Component, OnInit} from '@angular/core';

import {ProductService} from '../shared';
import {Product} from './product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['id'] != null && params['id'].length > 1) {
        return this.getProductSubscribe(params['id']);
      }
    });
  }

  getProductSubscribe(id: String): Product {
    this.productService.getProduct(id).subscribe(
      data => {
        this.product = data;
      },
      error => console.log(error)
    );
    return this.product;
  }

}
