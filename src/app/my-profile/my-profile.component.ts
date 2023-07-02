import { Component } from '@angular/core';
import { DoctorAppointmentService } from '../service/doctor-appointment.service';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {

  public appt: any[] = [];
  public arraylength!:number
  public docName:any
  public doctorlist:any

  constructor(private appoint:DoctorAppointmentService,private api:ApiService){}
  ngOnInit(): void {
    this.appoint.getDoctor().subscribe(res=>{
      this.appt=res
      console.log(this.appt)
      this.arraylength=this.appt.length
      this.docName=this.appt[this.arraylength-1]?.username || '';
      console.log(this.docName)

      this.api.getDoctProfile(this.docName).subscribe(
        res=>{
          this.doctorlist=res;
          console.log(this.doctorlist)
        }
      )
      })

  }

  
//update

prdtlist:any={ doctorName :'', specialization :'', yearsOfExperience : '', emailId :'', educationLevel :'', phoneNumber :'', location : '',}
// productId!:number


public UpdatePrdtById(){
  console.log(56458)
  return this.api.update(this.prdtlist,this.doctorlist.doctorName)
  .subscribe( result =>
    {

      let popup = document.getElementById('popupUpdated');
      popup?.classList.add('open');

      this.api.getDoctProfile(this.docName).subscribe(
        res=>{
          this.doctorlist=res;
          console.log(this.doctorlist)
        })

    }
    );
}
closePopupUr() {
  let popup = document.getElementById('popupUpdated');
  popup?.classList.remove('open');
}

openPopup2() {
  let popup = document.getElementById('popupu');
  popup?.classList.add('open');
}

closePopupUp() {
  let popup = document.getElementById('popupu');
  popup?.classList.remove('open');
}
tick:string='assets/Images/check.png'
}
