import { Component, Input } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuccessService } from 'src/app/shared/Services/success.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  FullName:string='';
  Address:string='';
  Credit:string='';
  numberRegEx = /\-?\d*\.?\d{1,2}/;
  @Input() Total:number=0;

  constructor(private router: Router, private obj:SuccessService ) {


  }

  SubmitForm= new FormGroup({
    // '', [Validators.required,Validators.minLength(10)]
    fullName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    address:new FormControl('',[Validators.required,Validators.minLength(5)]),
    credit :new FormControl('',[Validators.required,Validators.maxLength(16),Validators.minLength(16),Validators.pattern(this.numberRegEx)])
  });
  FormSubmit(){

    // I learn more about navigate from this link  https://ionicframework.com/docs/angular/navigation
    this.obj.SetData({name:this.FullName,total:this.Total})
    this.router.navigate(['/Success']);
  }
  changefullName(input:string){
 this.FullName=input;


  }
  changeaddress(input:string){
   this.Address=input;
  }
  changecredit(input:string){
  this.Credit=input;
  }
}
