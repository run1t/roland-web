import { Component, OnInit, VERSION } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { AuthenticationEventService } from '../../service/authentication-event.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authenticationService:AuthenticationService,
    private authenticationEventService:AuthenticationEventService,
    private router:Router
  ) { }

  ngOnInit() {
    console.log(VERSION.full);
    this.authenticationEventService.changing(true);
  }
  
  logger(value:Login){

    this.authenticationService.login(value.login, value.password).subscribe(() => {
      this.authenticationEventService.changing(true); 
      this.router.navigate(['/create']);
    });
  }

}

interface Login{
  login: string;
  password: string;
}