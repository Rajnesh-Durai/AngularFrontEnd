import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit{

  public appt: any[] = [];
  public arraylength!:number;
  public docName:any;
  public details:any;

  constructor(private api:ApiService){}
  ngOnInit(): void {

 // Retrieve docName from localStorage
 const storedDocName = localStorage.getItem('name');

 if (storedDocName) {
   this.docName = storedDocName;

     this.api.getAppt(this.docName).subscribe(res=>{
      console.log(this.docName);
      this.details=res;
      console.log("Got Successfully");
      console.log(this.details);


     });
 }


  }

}
