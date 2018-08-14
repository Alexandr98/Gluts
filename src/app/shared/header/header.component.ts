import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  public inTrash;
  public openCategory: boolean = false;
  public a: string;
  public category: string;
  public condition: boolean = true;
  public filteredCategory;

  public categorySearch = [
    { name: 'По умолчанию', product: 'all' },
    { name: 'Названию', product: 'product_name' },
    { name: 'Артикулу', product: 'code' },
    { name: 'Бренду', product: 'brand' },
  ];

  public categorySelect(target: any): void {
    this.category = target.innerHTML;
    this.filteredCategory = this.categorySearch.filter(product => product.name === this.category);
    this.filteredCategory = this.filteredCategory[0].product;
  }

  public openCategorySearch(): void {
    this.openCategory = !this.openCategory;
  }

  public toggle(): void {
    this.condition = !this.condition;
  }
  public removeCart(event: any): void {
    this.inTrash = this.inTrash.filter(el => el.id !== event.id);
  }
}
