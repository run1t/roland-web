import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  logger(value:Login){
    let login:Login;
    let result:Boolean = false;
    
    if(value.login === "Vincent" &&  value.password === "azerty")
      result = true;

    return result;
  }

}

interface Login{
  login:String,
  password:String
}