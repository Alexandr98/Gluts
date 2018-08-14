import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent  {
  @Input()
  public shopList: any;

  @Output()
  public itemInTrash: EventEmitter<{}> = new EventEmitter();

  public addToTrash(item: productList): void {
    this.itemInTrash.emit(item);
  }
}
