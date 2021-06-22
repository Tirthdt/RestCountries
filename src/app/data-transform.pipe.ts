import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataTransform',
})
export class DataTransformPipe implements PipeTransform {
  transform(values: unknown[], ...args: unknown[]) {
    let res = '';

    values.forEach((value: any) => {
      if (args[0] == 'currency') {
        res += value.code + ',';
      } else if (args[0] == 'languages') {
        res += value.name + ',';
      }
    });
    return res.slice(0, res.length - 1);
  }
}
