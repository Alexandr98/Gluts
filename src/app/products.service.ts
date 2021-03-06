import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 public constructor (private http: HttpClient) {}

 public getProducts(): Observable<product[]> {
    return this.http.get<product[]>('assets/product.json');

  }
}
