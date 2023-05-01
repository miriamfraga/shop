import { AuthService } from './../../service/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string = ""
  password: string = ""
  firstname: string = ""

  constructor(private authService: AuthService){}

  register(){
   this.authService.signUp(
  this.email,
  this.password,
  this.firstname
 ).subscribe(data=>{
   alert("user registered")
 }, 
 error=>{
  alert("error")
 })
  }

}
