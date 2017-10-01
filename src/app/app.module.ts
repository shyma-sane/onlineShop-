import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product/product.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { TestyComponent } from './testy/testy.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavbarComponent,
    ProductsListComponent,
    TestyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
