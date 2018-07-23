import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent{

  @Input()
  public item;

  @Output()
  public removeCart = new EventEmitter();


  public remove(item): void {
    this.removeCart.emit(item);
  }

}
