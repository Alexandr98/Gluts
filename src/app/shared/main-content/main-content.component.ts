import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent  {
  @Input() public products$: Observable<product[]>;
  @Output() public toCart: EventEmitter<any> = new EventEmitter();

  public addToCart(item: any): void {
    this.toCart.emit(item);
  }
}
