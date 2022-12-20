import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

id:number=0;
Count:number=1;
pro:any=<any>{};
CartP:any[]=[]
item:any=<any>{};
  constructor( private service:ProductService ,private route:ActivatedRoute) {

  }
  ngOnInit(): void {
    this.id=Number(this.route.snapshot.paramMap.get("id"))
    this.pro=this.service.products.find(pro=>pro.id==this.id)
    console.log(this.pro)
  }

  Add(){
    this.item={product:this.pro,count:this.Count}
    if("cart" in localStorage){
      this.CartP =JSON.parse(localStorage.getItem("cart")!)
      let existFlag=this.CartP.find(pro=>pro.product.id==this.item.product.id)
      if(existFlag){
        alert("This Product is already exist!")
      }else{
        this.CartP.push(this.item)
      localStorage.setItem("cart",JSON.stringify(this.CartP))
      alert("This Product added to cart successfully!")
      }

    }else{
      this.CartP.push(this.item)
      localStorage.setItem("cart",JSON.stringify(this.CartP))
      alert("This Product added to cart successfully!")
    }
  }



}
