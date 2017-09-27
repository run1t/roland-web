import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-list-match-container',
  templateUrl: './list-match-container.component.html',
  styleUrls: ['./list-match-container.component.css']
})
export class ListMatchContainerComponent implements OnInit {

  listMatches: Array<Match> = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getMatches().then(value => {
      this.listMatches = <Array<Match>> value;
    });
  }

}


interface Match{
  team1: Team;
  team2: Team;
  date: string;
  startTime: string;
  duration: string;
  court: string;
}

interface Team{
  players: Array<string>;
  score: number;
}