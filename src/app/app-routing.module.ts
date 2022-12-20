import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/Components/cart/cart.component';
import { SuccessComponent } from './cart/Components/success/success.component';
import { ProductDetailComponent } from './product/Components/product-detail/product-detail.component';
import { ProductListComponent } from './product/Components/product-list/product-list.component';

const routes: Routes = [
  {path:"products",component:ProductListComponent},
  {path:"details/:id",component:ProductDetailComponent},
  {path:"cart",component:CartComponent},
  {path:"Success",component:SuccessComponent},
  {path:"**",redirectTo:"products",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
