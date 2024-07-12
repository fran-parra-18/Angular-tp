import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';
import { Food } from '../food-list/food';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{


  cartList$: Observable<Food[]>;

  constructor(
    private cart: CartService,
  
  ){
    this.cartList$= cart.cartList.asObservable();    
  }  
  ngOnInit(): void {     
  }
}
