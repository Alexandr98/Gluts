import { Component, Input } from '@angular/core';
import { splitClasses } from '../../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  public inTrash: {}[];

  public condition: boolean = true;

  public toggle(): void {
    this.condition = !this.condition;
  }

  public removeCart(event: number): void {
      this.inTrash.splice(event, 1);
      this.inTrash.push(event);
  }
}
