import { environment } from './../../environment/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Iproduct } from '../allinterfaces/iproduct';
import { ICateProds } from '../allinterfaces/icate-prods';

@Injectable({
  providedIn: 'root'
})
export class AllProductsService {

  private word = new BehaviorSubject<string>('');
  
  private word$ = this.word.asObservable();
  
  setWord(value:string) {
     this.word.next(value)
  };
  getword():Observable<string> {
    return this.word$
  };
  constructor(private _HttpClient:HttpClient) { }

  getAllProduct():Observable<Iproduct> {
   return this._HttpClient.get<Iproduct>(`${environment.APIurl}/products`)
  }
  getAllCate(): Observable<string[]>{
    return this._HttpClient.get<string[]>(`${environment.APIurl}/products/categories`)

  }

  getProductPages(limit: number = 9, skip :number=0):Observable<Iproduct> {
   return this._HttpClient.get<Iproduct>(`${environment.APIurl}/products?limit=${limit}&skip=${skip}`)
}
  getProductByCate(prodCate:string):Observable<Iproduct> {
   return this._HttpClient.get<Iproduct>(`${environment.APIurl}/products/category/${prodCate}`)
  }
  searchProd: any;
  searchProductByName(prodName?:string):Observable<Iproduct> {
   return this.searchProd= this._HttpClient.get<Iproduct>(`${environment.APIurl}/products/search?q=${prodName}`)
  }
   
}
