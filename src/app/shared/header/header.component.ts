import { Component, Input } from '@angular/core';
import { splitClasses } from '../../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
<<<<<<< HEAD
  public inTrash;
=======
  public inTrash: {}[];
>>>>>>> 559cdf51e578541f9e2e92e4b7a452b49d87726a

  public condition: boolean = true;

  public toggle(): void {
    this.condition = !this.condition;
<<<<<<< HEAD
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
=======
  }

  public removeCart(event: number): void {
      this.inTrash.splice(event, 1);
      this.inTrash.push(event);
  }
>>>>>>> 559cdf51e578541f9e2e92e4b7a452b49d87726a
}
