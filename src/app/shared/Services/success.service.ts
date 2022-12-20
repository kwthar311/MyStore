import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuccessService {
  data: any = <any>{};
  constructor() { }

  SetData(obj:any){
    this.data=obj;
  }

  GetData(){
    return this.data;
  }

}
