import { Component, OnInit } from '@angular/core';
import { BeerCartService } from '../beer-cart.service';
import { Observable } from 'rxjs';
import { Beer } from '../beer-list/beer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{

  cartList$: Observable<Beer[]>;

  constructor(private cart: BeerCartService){
    this.cartList$= cart.cartList.asObservable();    
  }  
  ngOnInit(): void {    
  }
}
