import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: any[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProduct().subscribe((res) => {
      this.products = res;
    });
  }

  remove(item: any) {
    this.cartService.removeItem(item);
  }
}
