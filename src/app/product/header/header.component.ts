import { Component } from '@angular/core';
import { AllProductsService } from '../../serviceViewModul/all-products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private _AllProductsService:AllProductsService) {
  
  }
  

  typing(value:string) {
    this._AllProductsService.setWord(value)
    }
  }

