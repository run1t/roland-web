import { Component, OnInit, VERSION } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authenticationService:AuthenticationService,
    private router:Router
  ) { }

  ngOnInit() {
    console.log(VERSION.full);
  }
  
  logger(value:Login){
    // const login: Login;
    // let result: Boolean = false;

    // if (value.login === 'Vincent' &&  value.password === 'azerty') {
    //   result = true;
    // }

    // return result;

    this.authenticationService.login(value.login, value.password).subscribe(() => {
      this.router.navigate(['/create']);
    });
  }

}

interface Login{
  login: string;
  password: string;
}