import { Component, OnInit } from '@angular/core';
import { RequestService } from '../service/request.service';
import { Router } from '@angular/router';
import { SignupService } from '../service/signup.service';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-request-login',
  templateUrl: './request-login.component.html',
  styleUrls: ['./request-login.component.css']
})
export class RequestLoginComponent implements OnInit {
  public requestList:any=[] ;

  constructor(private reqService : RequestService,private rout:Router,private api:SignupService,private front:ApiService){}

  ngOnInit(): void {
    this.front.getReq().subscribe(res=>{
      this.requestList=res;
      console.log(this.requestList);
    })
    // this.reqService.getProduct().subscribe(res=>{
    //   this.requestList=res
    // })

  }

  //add to user table
  Add(doct:any):void
  {
    //posted to user table
    // this.api.login(doct).subscribe(res=>{
    //   console.log("added");
    // })
    this.api.signup(doct).subscribe(res=>{
      console.log(res);
    })
    this.removeItem(doct);
  }
   //remove single item
 removeItem(doct:any)
 {
  this.front.delReq(doct.name).subscribe(res=>{
    console.log("deleted");
  })
  this.reqService.removeRequestItem(doct)
  this.front.getReq().subscribe(res=>{
    this.requestList=res;
    console.log(this.requestList);
  })
  window.location.reload();
 }


}
