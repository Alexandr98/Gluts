import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  public cartProducts: any;
  public products$: Observable<product[]>;
  public openCategory: boolean = false;
  public a: string;
  public category: string;
  public condition: boolean = true;
  public filteredCategory: any;

  public categorySearch: any = [
    { name: 'По умолчанию', product: 'all' },
    { name: 'Названию', product: 'product_name' },
    { name: 'Артикулу', product: 'code' },
    { name: 'Бренду', product: 'brand' },
  ];

  public categorySelect(target: any): void {
    this.category = target.innerHTML;
    this.filteredCategory = this.categorySearch.filter((product: any) => product.name === this.category);
    this.filteredCategory = this.filteredCategory[0].product;
  }

  public openCategorySearch(): void {
    this.openCategory = !this.openCategory;
  }

  public toggle(): void {
    this.condition = !this.condition;
  }
  public removeCart(event: any): void {
    this.cartProducts.splice(event, 1);
  }
}
