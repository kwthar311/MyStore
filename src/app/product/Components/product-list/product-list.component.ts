import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private service:ProductService){

  }
  products:any[]=[]
  CartP:any[]=[]
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
    if("cart" in localStorage){
      this.CartP =JSON.parse(localStorage.getItem("cart")!)
      let existFlag=this.CartP.find(pro=>pro.product.id==event.product.id)
      if(existFlag){
        alert("This Product is already exist!")
      }else{
        this.CartP.push(event)
      localStorage.setItem("cart",JSON.stringify(this.CartP))
      alert("This Product added to cart successfully!")
      }

    }else{
      this.CartP.push(event)
      localStorage.setItem("cart",JSON.stringify(this.CartP))
      alert("This Product added to cart successfully!")
    }
  }

}
