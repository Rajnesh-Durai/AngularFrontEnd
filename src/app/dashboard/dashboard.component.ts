import { Component, OnInit } from '@angular/core';
import { DoctorAppointmentService } from '../service/doctor-appointment.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    //profile
    public appt: any[] = [];
    public arraylength!:number
    public docName:any
    showWelcome:boolean=true

    constructor(private appoint:DoctorAppointmentService){}
  ngOnInit(): void {

    this.appoint.getDoctor().subscribe(res=>{
      this.appt=res
      console.log(this.appt)
      this.arraylength=this.appt.length
      this.docName=this.appt[this.arraylength-1]?.username || '';
      console.log(this.docName)
    })
      // Hide the welcome div after 3 seconds
      timer(2000).subscribe(() => {
        this.showWelcome = false;
      });
    document.addEventListener('DOMContentLoaded', function() {
      var content = document.querySelector('.content');
      var content1=document.querySelector('.content1')
      var content2=document.querySelector('.content2')
      function isElementInView(el:any) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
    
      function handleScroll() {
        if (isElementInView(content)) {
          content?.classList.add('show');
        }
      }
      function handleScroll1() {
        if (isElementInView(content1)) {
          content1?.classList.add('show');
        }
      }
      function handleScroll2() {
        if (isElementInView(content2)) {
          content2?.classList.add('show');
        }
      }
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial state
      window.addEventListener('scroll', handleScroll1);
      handleScroll1(); 
      window.addEventListener('scroll', handleScroll2);
      handleScroll2(); 
    });
    
  }

}