import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

   public transform(value: any, args?: any): any {
    args[0] = args[0].replace(/^\s*/, '');
    args[0] = args[0].toLowerCase();
    if (args[1] === 'all') {
      return value.filter(item => (item.product_name.toLowerCase().indexOf(String(args[0])) !== -1 ||
       item.code.toLowerCase().indexOf(String(args[0])) !== -1 ||
        item.brand.toLowerCase().indexOf(String(args[0])) !== -1));
    }
    return value.filter(item => item[args[1]].toLowerCase().indexOf(String(args[0])) !== -1);
  }

}
