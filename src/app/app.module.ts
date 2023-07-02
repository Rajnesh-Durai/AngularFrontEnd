import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponentComponent } from './login-component/login-component.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurDoctorsComponent } from './our-doctors/our-doctors.component';
import { BookNowComponent } from './book-now/book-now.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestLoginComponent } from './request-login/request-login.component';
import { InterceptorService } from './service/interceptor.service';
import { AdminPageComponent } from './admin-page/admin-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    AboutUsComponent,
    OurDoctorsComponent,
    BookNowComponent,
    MyProfileComponent,
    AppointmentDetailsComponent,
    DashboardComponent,
    RequestLoginComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:InterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
