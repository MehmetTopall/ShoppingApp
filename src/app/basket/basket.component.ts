import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  public cartproduct:any
  public grandtotal !:number;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.gerproducts()
    .subscribe(res=>{
      this.cartproduct = res;
      this.grandtotal = this.cartService.gettotalprice()
    })
  }
  delet(product:any){
    this.cartService.removecart(product)
  }
  removeall(){
    this.cartService.removeallcart()

  }

}
