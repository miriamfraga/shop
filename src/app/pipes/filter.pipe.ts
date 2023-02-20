import { Iarray } from './../models/interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any, filterBonsai: string = '') {
    const lowerCaseFilter: string = filterBonsai.toLowerCase().trim();
    const filteredBonsais: any = list.filter((bo:string)=>{
      console.log(bo);
      return bo.toLowerCase().includes(lowerCaseFilter)
  
    });
    return filteredBonsais;
  }

}
