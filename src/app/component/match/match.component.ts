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

  typeMatch: string = '';

  constructor() { }

  ngOnInit() {
    this.typeMatch = this.team1.players.length > 1 ? 'Double messieurs' : 'Simple messieurs';
  }

}

interface Team{
  players: Array<string>;
  score: number;
}
