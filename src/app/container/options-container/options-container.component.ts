import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options-container',
  templateUrl: './options-container.component.html',
  styleUrls: ['./options-container.component.css']
})
export class OptionsContainerComponent implements OnInit {
  public show = true;
  public optionList = [{
    text: 'JOUER'
  }, {
    text: 'ARBITRE'
  }, {
    text: 'COURT'
  } ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  public goToCreate($event) {
    switch ($event.text) {
      case 'JOUER':
      return this.router.navigate(['/create']);
      default:
        console.log('404');
    }

  }

}
