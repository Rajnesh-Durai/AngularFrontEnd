import { Component, OnInit } from '@angular/core';
import { DoctorAppointmentService } from '../service/doctor-appointment.service';
import { ApiService } from '../service/api.service';
import { IndividualRecordService } from '../service/individual-record.service';
import { individualRecord } from '../Model/individualRecord';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit{

  public appt: any[] = [];
  public arraylength!:number
  public docName:any
  public details:any;

  constructor(private appoint:DoctorAppointmentService,private api:ApiService,private ind:IndividualRecordService){}
  ngOnInit(): void {
    this.appoint.getDoctor().subscribe(res=>{
      this.appt=res
      console.log(this.appt)
      this.arraylength=this.appt.length
      this.docName=this.appt[this.arraylength-1]?.username || '';
      console.log(this.docName)
  
      this.api.getAppt(this.docName).subscribe(res=>{
        console.log(this.docName)
        this.details=res;
        console.log("Getted Successfully")
        console.log(this.details)

        var dummy = new individualRecord;
        dummy = this.details;
        console.log(dummy)
    
        this.ind.addToAppointment(dummy)
      })
    })


  }

}
