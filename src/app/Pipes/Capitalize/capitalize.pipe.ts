import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    value = value.toLocaleLowerCase();
    let _names = value.split(' ');

    _names = _names.map(_names => {
      return `${_names[0].toUpperCase()}${_names.substr(1)}`;
    });

    return _names.join(' ');
  }

}
