import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {DemoMaterialModule, ProductComponent} from './product/product.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import 'hammerjs';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDirective } from './shared/directives/category.directive';

// import {enableProdMode} from '@angular/core';
// enableProdMode();

const routes: Routes = [
  // { path: '', redirectTo: 'products', pathMatch: 'full'},
  { path: '', component: ProductComponent },
  { path: 'products', component: ProductComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'products/:id', component: ProductComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoriesComponent,
    CategoryDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
