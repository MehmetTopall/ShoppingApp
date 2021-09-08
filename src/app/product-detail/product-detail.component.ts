import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private commonService:ServiceService,private activatedRoute:ActivatedRoute) { }
  id:any;
  product:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{
      this.id=params.get('id');
    })
    this.getProductById(this.id);
  }
  getProductById(id:any){
    this.commonService.getProById(id).subscribe((res)=>{
      this.product=res;
    })
  }

}
