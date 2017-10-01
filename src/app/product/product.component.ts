import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product.class';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  // template: `
  // <h4 *ngIf="product">Selected Product: <label >{{product.name}}</label></h4>
  // `,
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Input() onSelect;
  @Input() selectedProduct;
  constructor () { }
  ngOnInit() {
  }

}
