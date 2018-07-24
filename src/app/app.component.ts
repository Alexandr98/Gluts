import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public inTrash: {}[] = [];
  public shopList: {} = [
    {
      name: 'Обои angular', articul: '1045', brand: 'Fromental',  id: '1',
      price: '1045', image: '../../assets/images/shop_list_fitst.png'
    },
    {
      name: 'Обои react', articul: '1045', brand: 'Fromental', id: '2',
      price: '1045', image: '../../assets/images/shop_list_fiv.png'
    },
    {
      name: 'Обои js', articul: '1045', brand: 'Fromental', id: '3',
      price: '1045', image: '../../assets/images/shop_list_sec.png'
    },
    {
      name: 'Обои observable', articul: '1045', brand: 'Fromental', id: '4',
      price: '1045', image: '../../assets/images/shop_list_sec.png'
    },
    {
      name: 'Обои array', articul: '1045', brand: 'Fromental', id: '5',
      price: '1045', image: '../../assets/images/shop_list_sec.png'
    },
    {
      name: 'Обои JsDaddy', articul: '1045', brand: 'Fromental', id: '6',
      price: '1045', image: '../../assets/images/shop_list_fiv.png'
    },
  ];

 public itemInTrash(event: number): void {
    this.inTrash.push(event);
  }
}
