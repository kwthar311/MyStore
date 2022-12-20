import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input ()item:any={}
  @Output() SelectedProduct =new EventEmitter()
  Count:number=1;

  Add(){
    this.SelectedProduct.emit({product:this.item,count:this.Count})
  }

}
