import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Beer } from './beer-list/beer';

const URL ="https://65ac6284adbd5aa31bdf3714.mockapi.io/api/stockproducts"

@Injectable({
  providedIn: 'root'
})
export class BeerDataService {

  constructor(private https: HttpClient) { }

  public getAll(): Observable<Beer[]>{

    return this.https.get<Beer[]>(URL)
          .pipe(
            tap((beers:Beer[])=>beers.forEach(beer=>beer.quantity=0))
          );
  }
}
