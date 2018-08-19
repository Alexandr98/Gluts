import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public products$: Observable<product[]>;
  public cartProducts: any = [];

  public constructor(private products: ProductsService) {

  }
 public ngOnInit(): void {
  this.products$ = this.products.getProducts();
  }

  public addToCart(event: any): void {
    this.cartProducts.push(event);
  }
}
