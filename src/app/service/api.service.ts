import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseport='https://localhost:7033'

  constructor(private http:HttpClient) { }

  //user part
  public getallDoctor():Observable<any>
  {
    return this.http.get(this.baseport+'/PatientView/ListOfDoctors')
  }
  public getdoct(special:any):Observable<any>
  {
    return this.http.get(this.baseport+'/PatientView/DoctorsBased?name='+special)
  }
  public postBook(list:any):Observable<any>
  {
    return this.http.post(this.baseport+'/PatientView/BookingAnAppointmant',list)
  }
  public getAppt(person:any):Observable<any>
  {
    return this.http.get(this.baseport+'/DoctorView/AppointmentDetails?name='+person)
  }

  public getDoctProfile(person:any):Observable<any>
  {
    return this.http.get(this.baseport+'/DoctorView/Profile?name='+person)
  }


  //admin

  //Add new prdt
  public addPrdt(prdtlist:any):Observable<any>
  {
    return this.http.post(this.baseport +'/AdminView/AddNewDoctor',prdtlist);
  }
  //del by id
  public delbyId(id:number):Observable<any>
  {
    return this.http.delete(this.baseport+"/AdminView/RemoveADoctor?id="+id)
  }
  //update
  public update(updatedPrdt:any,name:string):Observable<any>
  {
    const url = `${this.baseport}/DoctorView/UpdateDetails?name=${name}`;

    return this.http.put(url, updatedPrdt);
  }

}
