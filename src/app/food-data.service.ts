import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Food } from './food-list/food';

const URL ="https://65ac6284adbd5aa31bdf3714.mockapi.io/api/stockproducts"

@Injectable({
  providedIn: 'root'
})
export class FoodDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Food[]>{

    return this.http.get<Food[]>(URL)
          .pipe(
            tap((foods:Food[])=>foods.forEach(food=>food.quantity=0))
          );
  }
}
