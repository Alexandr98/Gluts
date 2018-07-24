import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  @Input()
  public item: productList;

  @Output()
  public removeCart: EventEmitter<{}> = new EventEmitter();


  public remove(item: productList): void {
    this.removeCart.emit(item);
  }

}
