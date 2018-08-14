import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 public constructor (private http: HttpClient) {}

 public getProducts(): Observable<productList[]> {
    return this.http.get<productList[]>('./assets/products.json');

  }
}
