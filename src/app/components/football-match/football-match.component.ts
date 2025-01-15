import { Component } from '@angular/core';
import { FootballMatchService } from '../../services/football-match.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-football-match',
  imports: [CommonModule],
  templateUrl: './football-match.component.html',
  styleUrl: './football-match.component.css'
})
export class FootballMatchComponent {
  matches: any[] = [];

  constructor(private footballMatchService: FootballMatchService) {}

  ngOnInit() {
    this.matches = this.footballMatchService.getMatches();
  }
}

