import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  BASE:string = 'http://localhost:3000'

  constructor(private http:HttpClient) { }

  login(login:string, password:string){
    return this.http.post(this.BASE + '/token', JSON.stringify({login: login, password: password}))
    .map((response:Response) => {
      let user = response.json();
      if(user && user.token){
        localStorage.setItem('currentUser', JSON.stringify(user));

        return user;
      }
    })
  }

  logout(){
    localStorage.removeItem('currentUser');
  }
}
