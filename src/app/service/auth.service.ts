import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string){

  }

  signUp(email: string, password: string, firstname: string){
    return this.http.post("htto://localhost:3000/register",
     {
      email: email, 
      password: password,
      firstname: firstname,
    })
  }

  logOut(){

  }
}
