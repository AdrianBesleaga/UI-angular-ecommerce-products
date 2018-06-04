import {Component, NgModule, OnInit} from '@angular/core';

import {ProductService} from '../shared';
import {Product} from './product';
import {ActivatedRoute} from '@angular/router';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {Title} from '@angular/platform-browser';

@NgModule({
  exports: []
})

export class DemoMaterialModule {
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  public products: Product[];
  public product: Product;
  public categories: any[];
  public loading: boolean;

  constructor(private productService: ProductService, private route: ActivatedRoute, private titleService: Title ) {
  }

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.titleService.setTitle('Product details');
        this.getProduct(params['id']);
      } else {
        this.titleService.setTitle('Products');
        this.getCategories();
        this.getProducts();
      }
    });
  }

  getProduct(id: String): Product {
    this.productService.getProduct(id).subscribe(data => {
        this.product = data;
      },
      error => console.log(error)
    );
    return this.product;
  }

  getProducts(): Product[] {
    this.productService.getProducts().subscribe((products: Product[]) => {
        this.products = products;
      },
      error => console.log(error)
    );
    return this.products;
  }

  getCategories(): any[] {
    this.productService.getCategories().subscribe((categories: any[]) => {
        this.categories = categories;
        console.log(categories);
      },
      error => console.log(error)
    );
    return this.categories;
  }

}
