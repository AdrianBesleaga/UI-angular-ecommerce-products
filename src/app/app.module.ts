import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {RouterModule, Routes} from '@angular/router';

import {enableProdMode} from '@angular/core';
enableProdMode();


const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
