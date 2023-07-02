import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class RequestDTO {
    name!: string;
    username!: any;
    email!:any;
    roles!:string;
    password!:any;
  }
  