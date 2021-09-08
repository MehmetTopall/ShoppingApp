import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productlist :any;
  constructor(private commonService:ServiceService,private cartService:CartService) { }
  isReadMore = true
  allProduct:Object;
  ngOnInit(): void {
    this.getLatestProduct();
  }

  getLatestProduct(){
    this.commonService.getAllProduct().subscribe((response)=>{
      this.allProduct=response;
       
      this.productlist.forEach((a:any)=> {
        Object.assign(a,{quantity:1, total:a.price})
      });
    })

  }
  showText() {
    this.isReadMore = !this.isReadMore
 }
 addtocart(product:any){
  this.cartService.addtocart(product);

}
}
