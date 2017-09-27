import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  @Input() team1: Team;
  @Input() team2: Team;
  @Input() date: string;
  @Input() startTime: string;
  @Input() duration: string;
  @Input() court: string;

  constructor() { }

  ngOnInit() {
    console.log(this.team1);
    console.log(this.team2);
    console.log(this.date);
    console.log(this.startTime);
    console.log(this.duration);
    console.log(this.court);
  }

}

interface Team{
  players: Array<string>;
  score: number;
}
