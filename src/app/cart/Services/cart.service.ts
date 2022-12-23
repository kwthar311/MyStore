import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  CartP:any[]=[]
  constructor() { }

  AddToCart(item:any){
    if("cart" in localStorage){
      this.CartP =JSON.parse(localStorage.getItem("cart")!)
      let existFlag=this.CartP.find(pro=>pro.product.id==item.product.id)
      if(existFlag){
        alert("This Product is already exist!")
      }else{
        this.CartP.push(item)
      localStorage.setItem("cart",JSON.stringify(this.CartP))
      alert("This Product added to cart successfully!")
      }

    }else{
      this.CartP.push(item)
      localStorage.setItem("cart",JSON.stringify(this.CartP))
      alert("This Product added to cart successfully!")
    }
  }


}
