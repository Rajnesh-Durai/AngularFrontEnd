import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Status } from '../Model/status';
import { SignupService } from '../service/signup.service';
import { AuthService } from '../service/auth.service';
import { validPattern } from '../helpers/patter-match.validator';
import { MustMatch } from '../helpers/must-match.validator';
import { RequestDTO } from '../Model/RequestDTO';
import { RequestService } from '../service/request.service';
import { doctorDTO } from '../Model/doctorDTO';
import { DoctorAppointmentService } from '../service/doctor-appointment.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit{

  showWelcome:boolean=true
  bgimg:string='assets/Images/7870434_3776798.jpg';

  constructor(private signupService: SignupService,private doct:DoctorAppointmentService,private fb:FormBuilder,private authService:AuthService,private router: Router,
    private requestService:RequestService){}

  loginForm!:FormGroup
  loginForm2!:FormGroup
  status!:Status;
  status2!:Status
  get f(){
    return this.loginForm.controls;
  }

  get f1(){
    return this.loginForm2.controls;  // needed for validation in html file 
  }

roleName:any
outmessage!:string
  onPost(){
    if(this.roleName ==="Doctor")
    {

      this.outmessage="Access need to be given by Admin";

        var request=new RequestDTO;
        request=this.loginForm.value;
        this.requestService.addToRequest(request)
    }

    else{
      this.status = {statusCode:0,message:"wait.."};
      this.signupService.signup(this.loginForm.value).subscribe({
      next: (res)=>{
        console.log(res);
        this.status=res;
        this.loginForm.reset();
      },
      error: (err)=>{
        this.status.statusCode=0;
        this.status.message= "some error on server side";
      console.log(err);
      },
      complete:()=>{
        
      }
      })
      // timer(1500).subscribe(() => {
      //   this.showWelcome = false;
      // });
      setTimeout(() => {
        this.openPopup()
    }, 3000);
    }
     
 }
 OnPost2()
 {
  this.status2 = {statusCode:0,message:"wait...."};

  this.signupService.login(this.loginForm2
    .value).subscribe({
    next: (res)=>{
      // save username, accesstoken and refresh token into localStorage
      this.authService.addAccessToken(res.token);
      this.authService.addRefreshToken(res.refreshToken);
      this.authService.addUsername(res.username);
      this.status2.statusCode=res.statusCode;
      this.status2.message=res.message;
      if(res.statusCode==1){
      this.router.navigate(['/home']);
      }

    },
    error: (err)=>{
      console.log(err);
      this.status2.statusCode=0;
      this.status2.message="some error on server side";
    }
  })
  var doctor=new doctorDTO;
  doctor=this.loginForm2.value;
  this.doct.addToAppointment(doctor)
 }
 toggleWelcome() {
  this.showWelcome = !this.showWelcome;
}

role:any;
  ngOnInit(): void {
        // Set the duration for the timer (in milliseconds)
        const duration = 100; // 5 seconds

        // Start the timer
        setTimeout(() => {
          this.toggleWelcome();
        }, duration);

    const patternRegex= new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[#$^+=!*()@%&]).{6,}$');
    // must be atleast 6 character long,must contain 1 uppercase, 1 lowercase, 1 digit and 1 special character
    this.loginForm= this.fb.group({
       'name':['',Validators.required],
       'username':['',Validators.required],
       'email':['',Validators.required],
       'roles':[''],
       'password':['',[Validators.required,validPattern(patternRegex)]],
       'confirmPassword':['',Validators.required]
    },{
      validator:MustMatch('password','confirmPassword')
    })

    this.loginForm2= this.fb.group({
      'username':['',Validators.required],
      'password':['',Validators.required]
    })
    if(this.authService.isLoggedIn()){
      this.router.navigate(['/home']);
    }
  }
  // loginForm = new FormGroup({
  //   nameVal: new FormControl('',[namecheck]),
  //   email: new FormControl('',[
  //     Validators.required,
  //     Validators.email
  //   ]),
  //   password: new FormControl('',[passwordfn])
  // })
  get nameVal() {
    return this.loginForm?.get('nameVal');
  }
  get password() {
    return this.loginForm?.get('password');
  }
  onSubmit()
  {
    console.log('submitted')
  }

  public isRightPanelActive: boolean = false;

  activateRightPanel() {
    return this.isRightPanelActive = true;
  }

  deactivateRightPanel() {
    return this.isRightPanelActive = false;
  }
  tick:string='assets/Images/check.png'
  openPopup() {
    let popup = document.getElementById('popup');
    popup?.classList.add('open');
  }
  closePopup() {
    let popup = document.getElementById('popup');
    popup?.classList.remove('open');
  }
  name:any

  
  user():void{
    // const uname=this.loginForm2.value.username
    // this.name=uname
    // if(this.name==='Admin'){
    // this.router.navigate(['/admin'])}
    // else{
    //   this.router.navigate(['/home'])}
  }

}
