import { Component, Input } from '@angular/core';
import { Product } from './product/product.class';




const products: Product[] = [
  { id: 11, name: 'Crepe' },
  { id: 12, name: 'Pizza' },
  { id: 13, name: 'Caesar Salad' },
  { id: 14, name: 'Caesar Salad with Chicken' },
  { id: 15, name: 'Fattoush' },
  { id: 16, name: 'Mac & Cheese' },
  { id: 17, name: 'Pasta Alfredo' },
  { id: 18, name: 'Meat Balls' },
  { id: 19, name: 'Fruit Juice' },
  { id: 20, name: 'Coke' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products = products;
  selectedProduct: Product;
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}
