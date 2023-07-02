import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { RequestService } from './service/request.service';
import { IndividualRecordService } from './service/individual-record.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MGM-Hospital';
  public totalItem:number=0
  public totalItem2:number=0

  constructor(private request:RequestService,private authService:AuthService,private route:Router,private ind:IndividualRecordService){}
  ngOnInit(): void {
    this.request.getProduct().subscribe(res=>{
      this.totalItem=res.length
    })
    //apointment
    this.ind.getPatient().subscribe(res=>{
      this.totalItem2=res.length
    })
  }

  bellImage:string="assets/Images/bellicon.png"

logo:string="assets/Images/logo.png"

  //auth

roles="";
isLoggedIn!:boolean;

checkLoggedInUser(){
  this.isLoggedIn= this.authService.isLoggedIn();
  this.roles=this.authService.getUserRole();
}
logout(){
  this.authService.logout();
  this.route.navigate(['/'])
}

}
