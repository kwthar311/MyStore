import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './Components/cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { FormComponent } from './Components/form/form.component';
import { SuccessComponent } from './Components/success/success.component';



@NgModule({
  declarations: [
    CartComponent,
    FormComponent,
    SuccessComponent,

  ],
  imports: [
    CommonModule ,
    SharedModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule

  ]
})
export class CartModule { }
