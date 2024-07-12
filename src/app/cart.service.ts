import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Food } from './food-list/food';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cartList:Food[]=[];

  cartList: BehaviorSubject<Food[]> = new BehaviorSubject<Food[]>([]);
  
  constructor(private router: Router) {
    // Suscribirse a los eventos de navegación
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.clearCart();
      }
    });
  }

  public addToCart(food: Food) {
    let item = this._cartList.find((v1)=>v1.name==food.name);
    if(!item){
      this._cartList.push({... food});
    }else{
      item.quantity+=food.quantity
    }
    this.cartList.next(this._cartList);
    console.log(this._cartList)
  }  

  private clearCart() {
    this._cartList = [];
    this.cartList.next(this._cartList);
  }

}
