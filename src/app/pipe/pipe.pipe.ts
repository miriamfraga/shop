import { Iarray } from './../models/interface';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(list: Iarray[], filter: any = '') {
    const lowerCaseFilter: string = filter.toLowerCase().trim();
    const filteredBonsais: Iarray[] = list.filter((pr: any)=>{
      return pr.toLowerCase().includes(lowerCaseFilter);
    })
   return filteredBonsais
  }

}
