import { Component } from '@angular/core';
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

  constructor(private api:ApiService){}
  ngOnInit(): void {
  // Retrieve docName from localStorage
  const storedDocName = localStorage.getItem('name');

   if (storedDocName) {
      this.docName=storedDocName

      this.api.getDoctProfile(this.docName).subscribe(res => {
        this.doctorlist = res;
        console.log(this.doctorlist);
      });

  }
  }

  
//update

prdtlist:any={ doctorName :'', specialization :'', yearsOfExperience : '', emailId :'', educationLevel :'', phoneNumber :'', location : '',}
// productId!:number


public UpdatePrdtById(){
  console.log(56458);
  return this.api.update(this.prdtlist,this.doctorlist.doctorName)
  .subscribe( result =>
    {

      let popup = document.getElementById('popupUpdated');
      popup?.classList.add('open');

      window.location.reload();
});
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
tick:string='assets/Images/check.png';

//zoom

isBackgroundBlurred: boolean=false;
openPopup() {
  let popup = document.getElementById('popup');
  popup?.classList.add('open3');
  this.isBackgroundBlurred = !this.isBackgroundBlurred;
}
closePopupAdd() {
  let popup = document.getElementById('popup');
  popup?.classList.remove('open3');
  this.isBackgroundBlurred = !this.isBackgroundBlurred;
}





}
