import { Component, OnInit } from '@angular/core';
import { SuccessService } from 'src/app/shared/Services/success.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit{

  CustomerInfo:any=<any>{}
  constructor( private obj:SuccessService) {

  }
  ngOnInit(): void {
    this.CustomerInfo=this.obj.GetData();
  }

}
