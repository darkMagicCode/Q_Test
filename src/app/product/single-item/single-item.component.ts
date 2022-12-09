import { Component, Input,EventEmitter,ElementRef } from '@angular/core';
import { AllProductsService } from '../../serviceViewModul/all-products.service';
import { Iproduct } from '../../allinterfaces/iproduct';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent {
  @Input() allproductChild: Iproduct[] = [];
  constructor() {

  }



 ngOnDestroy(): void {

  
 }
}
