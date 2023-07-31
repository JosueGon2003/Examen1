import { Pipe, PipeTransform } from '@angular/core';
import { Callcenter } from '../services/service.service';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(callcenter: Callcenter[], searchText: string): Callcenter[] {
    if (!callcenter) {
      return [];
    }
    if (!searchText) {
      return callcenter;
    }
    searchText = searchText.toLowerCase();
    return callcenter.filter(callcenter => {
      return (
        callcenter.Codigoderegistro.toLowerCase().startsWith(searchText) 
      );
    });
  }
}
