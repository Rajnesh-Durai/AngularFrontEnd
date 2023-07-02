import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  
  tick:string='assets/Images/check.png'
  logoimg:string='assets/Images/logo.png'
  location: any;

  openPopup() {
    let popup = document.getElementById('popup');
    popup?.classList.add('open');
  }
  closePopupAdd() {
    let popup = document.getElementById('popup');
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

  openPopup3() {
    let popup = document.getElementById('popupd');
    popup?.classList.add('open');
  }
  closePopupDel() {
    let popup = document.getElementById('popupd');
    popup?.classList.remove('open');
  }

  //api part
  prodlist:any
  constructor(private api:ApiService,private build:FormBuilder){
 
  }
  ngOnInit(): void {
    this.totprdt() //list of products in table
    this.init() //adding new prdt
  }
  public totprdt():void
  {
    this.api.getallDoctor().subscribe(res=>{
      this.prodlist=res
      console.log(this.prodlist)
    })
  }


// add prdt

public addgrp!:FormGroup

private init():void{
  this.addgrp=this.build.group({ 
    doctorName:[],
    specialization:[],
    yearsOfExperience:[],
    emailId:[],
    educationLevel:[],
    phoneNumber:[],
    alternatePhoneNumber:[],
    location:[]
  });
}

public addbtn():void
{
  this.api.addPrdt(this.addgrp.value).subscribe(res=>{
      let popup = document.getElementById('popupAdded');
      popup?.classList.add('open');  
  })
}
closePopupAr() {
  let popup = document.getElementById('popupAdded');
  popup?.classList.remove('open');
}

  //del


  Id!:any

  delbtn():void
  {
    console.log('hi')
    this.api.delbyId(this.Id).subscribe(res=>{
      let popup = document.getElementById('popupDeleted');
      popup?.classList.add('open');
    })
  }

closePopupDr() {
  let popup = document.getElementById('popupDeleted');
  popup?.classList.remove('open'); 
}


//update

prdtlist:any={ doctorName :'', specialization :'', yearsOfExperience : '', emailId :'', educationLevel :'', phoneNumber :'',alternatePhoneNumber :'', location : '',}
// productId!:number


public UpdatePrdtById(){
  console.log(56458)
  return this.api.update(this.prdtlist,this.prdtlist.doctorName)
  .subscribe( result =>
    {

      let popup = document.getElementById('popupUpdated');
      popup?.classList.add('open');

    }
    );
}
closePopupUr() {
  let popup = document.getElementById('popupUpdated');
  popup?.classList.remove('open');
}

}
