import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndividualRecordService {

  public requestList:any=[]
  public doctorList= new BehaviorSubject<any>([])

  
  constructor() { }

//getting doctor

  getPatient(){
    return this.doctorList.asObservable()
  }

//setting to request

  setPatient(doctor:any)
  {
    this.requestList.push(...doctor)
    this.doctorList.next(doctor)
  }
//adding to request

addToAppointment(doctor:any)
{
  this.requestList.push(doctor)
  this.doctorList.next(this.requestList)
  console.log('cartItem')
  console.log(this.requestList)
}

}
