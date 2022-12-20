import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  ngOnInit(): void {
   this.GetAllproducts()
  }

  Cartproducts:any[]=[];
  TotalPrice:number=0;



  GetAllproducts(){
    if("cart" in localStorage){
      this.Cartproducts =JSON.parse(localStorage.getItem("cart")!)}
     this.GetTotalPrice()
  }

  GetTotalPrice(){
    this.TotalPrice=0;
    for(let i in this.Cartproducts){
      this.TotalPrice+=this.Cartproducts[i].product.price * this.Cartproducts[i].count;
    }
  }

  DetectChenges(){
    localStorage.setItem("cart",JSON.stringify(this.Cartproducts))
    this.GetTotalPrice()
  }

  deletePro(indexpro:number){
this.Cartproducts.splice(indexpro,1)
localStorage.setItem("cart",JSON.stringify(this.Cartproducts))
this.GetTotalPrice()
  }

}


