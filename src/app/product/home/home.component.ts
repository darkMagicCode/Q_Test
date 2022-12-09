import { Component, OnInit } from '@angular/core';
import { AllProductsService } from '../../serviceViewModul/all-products.service';
import { Iproduct } from '../../allinterfaces/iproduct';
import { ICateProds } from '../../allinterfaces/icate-prods';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _AllProductsService: AllProductsService) {
    this._AllProductsService
      .getAllProduct()
      .subscribe((data) => (this.allProduct = data.products));
    this._AllProductsService
      .getAllCate()
      .subscribe((data) => (this.allCate = data));
  }
  allCate: string[] = [];
  allProduct: Iproduct[] = [];
  pageCounts = new Array(12);

  pagesNum(pageNumber: number) {
    this._AllProductsService
      .getProductPages(9, pageNumber)
      .subscribe((data) => (this.allProduct = data.products));
  }

  currentCate: string = '';

  getcurrCate(event: Event) {
    this.currentCate = (event.target as HTMLInputElement).value;
    this._AllProductsService
      .getProductByCate(this.currentCate)
      .subscribe((data) => {
        (this.allProduct = data.products), (err: any) => console.log(err);
      });
    // console.log( event);
    
  }

  ngOnInit() {
    this._AllProductsService.getword().subscribe(data => {
      this._AllProductsService
    .searchProductByName(data)
      .subscribe(data =>this.allProduct = data.products);
      
    })
  }

  searchVal:string=''
}
