import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public shopList$: Observable<productList[]>;
  public inTrash: {}[] = [];

  public constructor(private shopList: ProductsService) {

  }
 public ngOnInit(): void {
    this.shopList$ = this.shopList.getProducts();
  }

  public itemInTrash(event: number): void {
    this.inTrash.push(event);
  }
}
