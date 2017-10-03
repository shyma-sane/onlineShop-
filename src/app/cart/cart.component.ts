
import { Component } from '@angular/core';
import { ProductService } from '../product/product.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  
})
export class CartComponent {

  //It is about encapsulation, and when you have a field or method on your component that you want to encapsulate in it,
  // making it clear that it shouldn't be accessed from anywhere else, then you should absolutely make it private: 
   //That's what private is for: It signals your intent that whatever you've put it on shouldn't be touched from outside the class.
  
 // The same goes for public: It too is a compile-time-only construct,
   //so the fact that class members are public by default,
   // while true, has exactly zero meaning at runtime. 
   // But when you have a member that you explicitly intend to expose to the outside world as a part of your class's API
    //, you should absolutely make it public to signal this intent: That's what public is for.
  
  public totalPrice: number;
  public totalQuantity: number;
  public cartSubscription: Subscription;
  products;
  cart;
  i;
  

  constructor(private productService:ProductService) {}
  
  removeProduct(product) {
    this.cart.splice(this.i,1)
  }

  emptyCart() {
    this.cart = [];
 }

  

  getTotalPrice() {
    let price = [];
    let amount = [];
    let cost = []
    for (let i = 0; i < this.cart.length; i++){
      if()
    }
    })

    this.price = cost.reduce((acc, item) => {
      return acc += item
    }, 0)
    this.quantity = quantity.reduce((acc, item) => {
      return acc += item
    }, 0)
  }
//You need subscribe to run your async request
//If you want to return an Observable some other code can subscribe to, but you still want to manipulate the data events in the current method, use map.

//The actual user of the observable needs to subscribe(), because without subscribe() the observable won't be executed at all. (forEach() or toArray() and probably others work as well to execute the observable instead of subscribe())

//subscribe() returns a Subscription that can not be subscribed to, but it can be used to cancel the subscription.

//map() returns an Observable which can be subscribed to.

  ngOnInit() {
    this.cartSubscription = this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.getTotalPrice()
    })
    this.cart = this.productService.getCart();
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe()
  }
  
}
