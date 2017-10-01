import { Component, Input, OnInit } from '@angular/core';
import { Product } from './product/product.class';
import { ProductService } from './product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})

export class AppComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;
  constructor(private productService: ProductService) { }
  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }
  ngOnInit(): void {
    this.getProducts();
  }
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}
