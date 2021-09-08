import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent

  },
  {
    path:"products",
    component:ProductsComponent
  },
  {
    path:"products/create",
    component:ProductComponent
  },
  {
    path:"products/categories",
    component:CategoryComponent
  },
  {
    path:"products/:id",
    component:ProductDetailComponent
  },
  {
    path:"products/categories/:categoryId",
    component:CategoryDetailComponent
  },
  {
    path:"basket",
    component:BasketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
