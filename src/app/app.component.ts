import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { Product } from './product/product.class';
// import { ProductService } from './product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [ProductService]
})

export class AppComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
