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
      name: 'Обои', articul: '1045', brand: 'Fromental',  id: '1',
      price: '1045', image: '../../assets/images/shop_list_fitst.png',
      inTrash: false
    },
    {
      name: 'Наркотики', articul: '1045', brand: 'Fromental', id: '2',
      price: '1045', image: '../../assets/images/shop_list_fiv.png',
      inTrash: false
    },
    {
      name: 'Человек', articul: '1045', brand: 'Fromental', id: '3',
      price: '1045', image: '../../assets/images/shop_list_sec.png',
      inTrash: false
    },
    {
      name: 'Китаец', articul: '1045', brand: 'Fromental', id: '4',
      price: '1045', image: '../../assets/images/shop_list_sec.png',
      inTrash: false
    },
    {
      name: 'Белый', articul: '1045', brand: 'Fromental', id: '5',
      price: '1045', image: '../../assets/images/shop_list_sec.png',
      inTrash: false
    },
    {
      name: 'Кот', articul: '1045', brand: 'Fromental', id: '6',
      price: '1045', image: '../../assets/images/shop_list_fiv.png',
      inTrash: false
    },
  ];

 public itemInTrash(event) {
    this.inTrash.push(event);
  }
}
