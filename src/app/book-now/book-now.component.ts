import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css']
})
export class BookNowComponent implements OnInit {
options:any
doctorlist!:any;
special!:string
doctorlist2!:any;
 addgrp!:FormGroup;


constructor(private api:ApiService, private build:FormBuilder){}

ngOnInit(): void {
  this.Doctors();
  // this.init();
}

private Doctors():void{
  this.api.getallDoctor().subscribe(res=>{
    this.doctorlist=res
    console.log("List of doctors")
  })
}
public getDoctor():void{
  console.log(this.special)
  this.api.getdoct(this.special).subscribe(res=>{
    this.doctorlist2=res
    console.log("List of doctors")
  })
}

ans:any
public getDoctorId():void
{
  console.log(this.prdtlist.doctorId)
  for(let i=0;i<this.doctorlist2.length;i++)
  {
    if(this.doctorlist2[i].doctorName === this.prdtlist.doctorId)
    {
      this.ans=this.doctorlist2[i].id;
      console.log(this.ans)
      break;
    }
  }
 

}


tick:string='assets/Images/check.png'

prdtlist:any={ patientName :'', patientAge :'', diseaseName : '', doctorId :'', appointmentDate :'', appointmentTime :''}

public addbtn():void
{
  this.prdtlist.doctorId=this.ans;
  console.log(this.prdtlist)
  this.api.postBook(this.prdtlist).subscribe(res=>{
      let popup = document.getElementById('popupAdded');
      popup?.classList.add('open');  
  })
}
closePopupAr() {
  let popup = document.getElementById('popupAdded');
  popup?.classList.remove('open');
}
}
