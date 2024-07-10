import { Injectable } from '@angular/core';
import { Beer } from './beer-list/beer';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerCartService {
  private _cartList:Beer[]=[];

  cartList: BehaviorSubject<Beer[]> = new BehaviorSubject<Beer[]>([]);
  
  constructor() { }

  addToCart(beer: Beer) {
    let item = this._cartList.find((v1)=>v1.name==beer.name);
    if(!item){
      this._cartList.push({... beer});
    }else{
      item.quantity+=beer.quantity
    }
    this.cartList.next(this._cartList);
    console.log(this._cartList)
  }
}
