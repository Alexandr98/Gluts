import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent  {
  @Input()
  public shopList: {}[];

  @Output()
  public itemInTrash = new EventEmitter();

  public addToTrash(item) {
    this.itemInTrash.emit(item);
  }
}
