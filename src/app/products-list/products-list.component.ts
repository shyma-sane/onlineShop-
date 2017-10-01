import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product/product.class';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {
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
