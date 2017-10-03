import { Injectable } from '@angular/core';
import { Product } from './product.class';
import { products } from './product.mockData';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductService {
  public cart = [];
  constructor(private http: Http) { }

  getProducts(){
    return this.http.get('http://localhost:3000/api/products')
        .map(res => res.json());
  }

getCart() {
  return this.cart;
}

addToCart(product: Product) {
  this.getCart().push(product)
}



  // getProducts(): Promise<Product[]> {
  //   return Promise.resolve(products);
  // } // stub

  // the following function is to simulate a slow connection, it's just for testing

  // getProductsSlowly(): Promise<Product[]> {
  //   return new Promise(resolve => {
  //     // Simulate server latency with 2 second delay
  //     setTimeout(() => resolve(this.getProducts()), 2000);
  //   });
  // }
}
