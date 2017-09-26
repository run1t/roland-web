import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthenticationService {

  BASE:string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  login(login:string, password:string){
    //return this.http.post(this.BASE + '/token', JSON.stringify({login: login, password: password}))
    return Observable.of({token:'fzefefzf'})
    .map((user) => {
      console.log(user);
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
