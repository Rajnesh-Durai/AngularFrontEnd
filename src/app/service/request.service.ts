import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {


  public requestList:any=[]
  public doctorList= new BehaviorSubject<any>([])

  
  constructor() { }

//getting doctor

  getProduct(){
    return this.doctorList.asObservable()
  }

//setting to request

  setProduct(doctor:any)
  {
    this.requestList.push(...doctor)
    this.doctorList.next(doctor)
  }
//adding to request

addToRequest(doctor:any)
{
  this.requestList.push(doctor)
  this.doctorList.next(this.requestList)
  console.log('cartItem')
  console.log(this.requestList)
}


//remove 1 item from request

removeRequestItem(doctor:any)
{
  this.requestList.map((a:any,index:any)=>{
    if(doctor.username === a.username)
    {
      this.requestList.splice(index,1)
    }
  })
  this.doctorList.next(this.requestList)
}

//remove all items from request

removeAllRequest()
{
  this.requestList=[]
  this.doctorList.next(this.requestList)
}
}
