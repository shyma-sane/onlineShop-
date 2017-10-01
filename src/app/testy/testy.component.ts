import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product/product.class';

@Component({
  selector: 'app-testy',
  templateUrl: './testy.component.html',
  styleUrls: ['./testy.component.css']
})
export class TestyComponent implements OnInit {
  @Input() product: Product;
  @Input() onSelect;
  @Input() selectedProduct;
  constructor() { }
  ngOnInit() {
  }
}
