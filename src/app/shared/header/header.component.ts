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

