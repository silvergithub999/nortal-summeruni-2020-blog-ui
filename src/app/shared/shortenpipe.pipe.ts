import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenpipe'
})
export class ShortenpipePipe implements PipeTransform {

  transform(value: string): any {
    const limit = 200;

    if (value.length <= limit) {
      return value;
    } else {
      return value.substring(0, limit) + '...';
    }
  }

}
