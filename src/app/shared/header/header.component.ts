import { Component, Input } from '@angular/core';
import { splitClasses } from '../../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  public inTrash;

  public condition: boolean = true;

  public toggle(): void {
    this.condition = !this.condition;
  }
  public findIndex(item: number) {
    for( let i = 0; i < this.inTrash.length; i++) {
      if ( this.inTrash[i].id === item ) {
        this.inTrash.splice(i, 1);
      }
    }
  }
  public removeCart(event: number): void {
    this.findIndex(event);
      this.inTrash.push(event);
  }
}
