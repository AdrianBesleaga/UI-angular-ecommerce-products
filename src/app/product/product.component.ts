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
  id: String;
  private sub: any;

  constructor(private productService: ProductService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      console.log(this.id);
      console.log(params);
    });

    this.productService.getProduct(this.id).subscribe(
      data => {
        this.product = data;
      },
      error => console.log(error)
    );
  }

}
