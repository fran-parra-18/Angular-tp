import { Component, OnInit } from '@angular/core';
import { Beer } from './beer';
import { BeerCartService } from '../beer-cart.service';
import { BeerDataService } from '../beer-data.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss',
})
export class BeerListComponent implements OnInit {
  beers:Beer[]=[];  
  
  constructor(
    private cart: BeerCartService,
    private beersDataService: BeerDataService){
  }
  
  ngOnInit(): void {
    this.beersDataService.getAll()
    .subscribe(beers => this.beers=beers);
  }

  addToCart(beer:Beer):void{    
    this.cart.addToCart(beer);
    beer.stock-=beer.quantity;
    beer.quantity=0;
  }
  
}