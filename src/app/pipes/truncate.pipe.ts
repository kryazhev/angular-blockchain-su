import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any, size: number): any {
    if (typeof value === 'string' && value.length > size) {
      return value.substring(0, size) + '...';
    }
    return value;
  }

}
