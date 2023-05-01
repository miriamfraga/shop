import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFilter'
})
export class FilterPipe implements PipeTransform {

  transform(bonsaisList: any[], filterSearch: string): any[] {
    if (!bonsaisList) {
      return [];
    }
    if (!filterSearch) {
      return bonsaisList;
    }
    filterSearch = filterSearch.toLocaleLowerCase();

    return bonsaisList.filter(bonsai => {
      return bonsai.name.toLocaleLowerCase().includes(filterSearch);
    })
  }
  }


