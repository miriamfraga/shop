import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/models';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(list: Item[], filter: any = '') {
    const lowerCaseFilter: string = filter.toLowerCase().trim();
    const filteredList: Item[] = list.filter((pr: any)=>{
      return pr.toLowerCase().includes(lowerCaseFilter);
    })
   return filteredList
  }

}
