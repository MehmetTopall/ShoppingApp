import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  allCategory:Object;
  constructor(private commonService:ServiceService) { }

  ngOnInit(): void {
    this.getLatestCategory()
  }
  getLatestCategory(){
    this.commonService.getAllCategory().subscribe((response)=>{
      this.allCategory=response
    })
  }

}
