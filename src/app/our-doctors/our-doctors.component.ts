import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-our-doctors',
  templateUrl: './our-doctors.component.html',
  styleUrls: ['./our-doctors.component.css']
})
export class OurDoctorsComponent implements OnInit {
  doctorlist!:any;
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.Doctors();
  }
  private Doctors():void{
    this.api.getallDoctor().subscribe(res=>{
      this.doctorlist=res
      console.log("List of doctors")
    })
  }
}
