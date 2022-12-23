import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/Services/cart.service';
import { Iproduct } from '../../models/iproduct';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private service:ProductService ,private cartservice:CartService){

  }
  products:Iproduct[]=[]

  ngOnInit(): void {
   this.GetProductList()
  }

  GetProductList(){
  this.service.GetProducts().subscribe((data:any)=>{
    this.service.products=data;
    this.products = data;
  })

  }

  FuncAddToCart(event:any){
this.cartservice.AddToCart(event)
  }

}
