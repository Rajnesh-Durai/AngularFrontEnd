import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oops404',
  templateUrl: './oops404.component.html',
  styleUrls: ['./oops404.component.css']
})
export class Oops404Component {
  constructor(private route:Router){}
home()
{
  const getRoles=localStorage.getItem('role');
  if(getRoles)
  {
    this.route.navigate(['/home']);
  }
  else{
    this.route.navigate(['/']);
  }


}
}
