import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartComponent } from '../cart/cart.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  allData: any;
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  // get all data
  ngOnInit(): void {
    this.productService.getAll().subscribe((res: any[]) => {
      this.allData = res;

      this.allData.forEach((element: any) => {
        Object.assign(element, { quantity: 1 });
      });
    });
  }

  addProduct(item: any) {         //get all product in cartlist
    this.cartService.addProduct(item);
  }
  
  ngOnDestroy(){                //unsubscribe service
    this.productService.getAll().unsubscribe();
    this.cartService.addProduct().unsubscribe();
}
