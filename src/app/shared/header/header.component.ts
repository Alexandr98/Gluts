import { Component, Input } from '@angular/core';

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
  public removeCart(event): void {
    this.inTrash = this.inTrash.filter(el => el.id !== event.id);
    }
  }
<<<<<<< HEAD
  public removeCart(event) {
    this.inTrash = this.inTrash.filter( el => el.id !== event.id);
}
}
=======

>>>>>>> 8c13bc7cde2f1400c21a91a16de7ef96da27d7ff
