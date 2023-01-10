import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 totalCount :number = 0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res=>{
      this.totalCount= res.length;
    })
  }

}
