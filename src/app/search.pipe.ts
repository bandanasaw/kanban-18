// search.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toLowerCase',
  standalone:true
})
export class SearchPipe implements PipeTransform {
  transform(item: any[], searchTerm: string): any[] {
    if (!item || !searchTerm) {
      return item;
    }
    return item.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
