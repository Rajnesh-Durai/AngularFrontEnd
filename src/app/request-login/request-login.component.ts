import { Component, OnInit } from '@angular/core';
import { RequestService } from '../service/request.service';
import { Router } from '@angular/router';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-request-login',
  templateUrl: './request-login.component.html',
  styleUrls: ['./request-login.component.css']
})
export class RequestLoginComponent implements OnInit {
  public requestList:any=[] 

  constructor(private reqService : RequestService,private rout:Router,private api:SignupService){}

  ngOnInit(): void {

    this.reqService.getProduct().subscribe(res=>{
      this.requestList=res
    })

  }

  //add to user table
  Add(doct:any):void
  {
    this.api.signup(doct).subscribe(res=>{
      console.log(res);
    })
    this.removeItem(doct)
  }
   //remove single item
 removeItem(doct:any)
 {
  this.reqService.removeRequestItem(doct)
 }

 //remove all item
 emptyCart()
 {
  this.reqService.removeAllRequest()
 }

}
