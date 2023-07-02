import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class doctorDTO {
    name!: string;
    username!: any;
    roles!:string;
  }
  