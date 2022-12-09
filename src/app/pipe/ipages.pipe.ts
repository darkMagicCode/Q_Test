import { Iproduct } from './../allinterfaces/iproduct';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ipages'
})
export class IpagesPipe implements PipeTransform {

  transform(value:number):number  {
     return Math.floor(value)
  }

}
