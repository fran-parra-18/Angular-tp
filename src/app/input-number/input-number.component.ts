import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import { Food } from '../food-list/food';


@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})
export class InputNumberComponent implements OnInit {
  @Input()
  quantity: number=0;

  @Input()
  max: number=0;
  
  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();
  constructor(){}

  ngOnInit(): void {
  } 
  

  upQuantity():void{       
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    
  }
  downQuantity():void{   
      this.quantity--;
      this.quantityChange.emit(this.quantity);    
  }

  onChangeQuantity(event:any):void{
    const value = event.target.value;    
    if (!isNaN(value) && value >= 0) {      
      this.quantity = Math.min(value, this.max);
      this.quantityChange.emit(this.quantity);      
    } else {      
      this.quantity=0;
      this.quantityChange.emit(this.quantity);
    }
  }

}
