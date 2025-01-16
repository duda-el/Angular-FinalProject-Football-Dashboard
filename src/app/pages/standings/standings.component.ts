import { Component, OnInit } from '@angular/core';
import { StandingsService } from '../../services/standings.service';
import { Standing } from '../../interfaces/standing.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css'],
})
export class StandingsComponent implements OnInit {
  standings: Standing[] = [];

  constructor(private standingsService: StandingsService) {}

  ngOnInit(): void {
    this.getStandings();
  }

  getStandings(): void {
    this.standingsService.getStandings().subscribe((data) => {
      this.standings = data;
    });
  }
}

