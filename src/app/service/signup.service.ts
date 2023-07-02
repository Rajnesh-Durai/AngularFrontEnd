import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
import { LoginResponseModel } from '../Model/login-response';
import { LoginRequestModel } from '../Model/loginRequestModel';
import { SignupRequestModel } from '../Model/signupReqModel';
import { Status } from '../Model/status';
import { ChangePasswrd } from '../Model/change-password';
// import { ChangePasswrd } from '../models/change-password';
// import { LoginResponseModel } from '../models/login-response';
// import { LoginRequestModel } from '../models/loginRequestModel';
// import { SignupRequestModel } from '../models/signupReqModel';
// import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  //private baseUrl = environment.baseUrl+'Authorization';
  constructor(private http:HttpClient) { 

  }

  login(model:LoginRequestModel){
  return this.http.post<LoginResponseModel>(`https://localhost:7033/api/Authorization/Login`,model);
  }

  signup(model:SignupRequestModel){
     return this.http.post<Status>(`https://localhost:7033/api/Authorization/Registration`,model);
  }

  chagePassword(model:ChangePasswrd){
    return this.http.post<Status>(`https://localhost:7033/api/Authorization/ChangePassword`,model);
    }

}