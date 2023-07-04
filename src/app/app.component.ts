import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MGM-Hospital';
  public totalItem!:number;
  public totalItem2:number=0;
 public docName:any

  constructor(private route:Router,
              private api:ApiService){}

  ngOnInit(): void {

    //count no of request from doctor login

    this.api.getReq().subscribe(res=>{
      this.totalItem=res.length;
      console.log(this.totalItem);
    })

    //count no of mails

     // Retrieve docName from sessionStorage
 const storedDocName = localStorage.getItem('name');

 if (storedDocName) {
   this.docName = storedDocName;

     this.api.getAppt(this.docName).subscribe(res=>{
      console.log(this.docName);
      this.totalItem2=res.length;
     });
 }
    
  }

  bellImage:string="assets/Images/bellicon.png";

logo:string="assets/Images/logo.png";

  //auth

  role: string = localStorage.getItem('role') || '';


logout(){
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("username");
  sessionStorage.removeItem('docName');
  sessionStorage.removeItem('Name');
  this.route.navigate(['/']).then(() => {
    // Optional: Scroll to the top of the page
    window.scrollTo(0, 0);
    location.reload();

  });

}

}
