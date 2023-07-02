import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class individualRecord {
    patientName!: string;
    patientAge!: any;
    diseaseName!:string;
    appointmentDate:any;
    appointmentTime:any;
  }
  