import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/Services/cart.service';
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
  constructor( private service:ProductService ,private route:ActivatedRoute ,private cartservice:CartService) {

  }
  ngOnInit(): void {
    this.id=Number(this.route.snapshot.paramMap.get("id"))
    this.pro=this.service.products.find(pro=>pro.id==this.id)
    console.log(this.pro)
  }

  Add(){
    this.item={product:this.pro,count:this.Count}
    this.cartservice.AddToCart(this.item)
  }



}
