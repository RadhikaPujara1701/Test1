import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartList: any = [];
  private productList = new BehaviorSubject<any>([]);
  constructor() {}
  
  getProduct() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartList.push(...product);
    this.productList.next(product);
  }

  addProduct(product: any) {
    this.cartList.push(product);
    this.productList.next(this.cartList);
  }

  removeItem(product: any) {
    this.cartList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartList.splice(index, 1);
      }
    });
    this.productList.next(this.cartList);
  }
}
