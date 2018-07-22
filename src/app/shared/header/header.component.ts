import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public condition: boolean = true;

  public toggle(): void {
    this.condition = !this.condition;
  }
}
