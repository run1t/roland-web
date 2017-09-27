import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { AuthenticationEventService } from '../../service/authentication-event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  labelButton = localStorage.getItem('currentUser') ? 'Déconnection' : 'Connexion';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private authenticationEventService: AuthenticationEventService
  ) {
    this.authenticationEventService.isChange$.subscribe(isChange => {
      if(isChange){
        this.labelButton = localStorage.getItem('currentUser') ? 'Déconnection' : 'Connexion';
      }
    })
  }

  ngOnInit() {}

  connection() {

    if (localStorage.getItem('currentUser')) {
      this.authenticationService.logout();
    }

    this.router.navigate(['/login']);
  }

}
