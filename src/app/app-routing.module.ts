import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { OurDoctorsComponent } from './our-doctors/our-doctors.component';
import { BookNowComponent } from './book-now/book-now.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { RequestLoginComponent } from './request-login/request-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  {path:'',component:LoginComponentComponent},
  {path:'home',component:DashboardComponent},
  {path:'home/aboutus',component:AboutUsComponent},
  {path:'home/MyProfile',component:MyProfileComponent, canActivate:[AuthGuard], data:{roles:['Doctor']}},
  {path:'home/admin',component:AdminPageComponent , canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path:'home/doctors',component:OurDoctorsComponent},
  {path:'home/booknow',component:BookNowComponent},
  {path:'home/appointDetails',component:AppointmentDetailsComponent, canActivate:[AuthGuard], data:{roles:['Doctor']}},
  {path:'home/requestLogin',component:RequestLoginComponent, canActivate:[AuthGuard], data:{roles:['Admin']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
