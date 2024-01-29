import { Component } from '@angular/core';
import { Iuser } from 'src/app/Models/User.model';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
usermodel:Iuser 

constructor()
{
  this.usermodel={

  }
}
onsubmithandler()
{
  console.log(this.usermodel)
}
}
