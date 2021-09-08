import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  allProduct:Object;
  isEdit=false;
  productObj={
    title:'',
    category:'',
    description:'',
    price:'',
    image:'',
    id:''
  }

  constructor(private commonService:ServiceService){}
  ngOnInit(){
    this.getLatestProduct();
  }

  addProduct(formObj){
    console.log(formObj)
    this.commonService.createProduct(formObj).subscribe((response)=>{
      this.getLatestProduct();
    })
  }
  getLatestProduct(){
    this.commonService.getAllProduct().subscribe((response)=>{
      this.allProduct=response
    })
  }
  editProduct(product){
    this.isEdit=true;
    this.productObj=product;

  }
  deleteProduct(product){
    this.commonService.deleteProduct(product).subscribe(()=>{
      this.getLatestProduct();
    })
    
  }
  updateProduct(){
    this.isEdit=!this.isEdit;
    this.commonService.updateProduct(this.productObj).subscribe(()=>{
      this.getLatestProduct();
    })
  }
}
