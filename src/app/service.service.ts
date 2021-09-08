import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  createProduct(product){
    return this.http.post("http://localhost:3000/product",product)
  }
  getAllProduct(){
    return this.http.get("http://localhost:3000/product")
  }
  getAllCategory(){
    return this.http.get("http://localhost:3000/categories")
  }
  updateProduct(product){
    return this.http.put("http://localhost:3000/product/"+product.id,product)
  }
  deleteProduct(product){
    return this.http.delete("http://localhost:3000/product/"+product.id)
  }
  getProById(id:any){
    return this.http.get("http://localhost:3000/product/"+id)
  }
  getcategoryById(id:any){
    return this.http.get("http://localhost:3000/categories/"+id)
  }

}
