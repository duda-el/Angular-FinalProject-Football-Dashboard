import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FootballMatchService {
  constructor() {}

  getMatches() {
    return [
      {
        team1: 'Argentina',
        team1Flag: 'assets/img/Argentina.svg',
        team2: 'Italy',
        team2Flag: 'assets/img/Italy.svg',
        score: '1 - 2',
        status: 'Full-Time',
        date: '18 December 2024',
      },
      {
        team1: 'Portugal',
        team1Flag: 'assets/img/Portugal.svg',
        team2: 'Belgium',
        team2Flag: 'assets/img/Belgium.svg',
        score: '2 - 3',
        status: 'Full-Time',
        date: '18 December 2024',
      },
      {
        team1: 'Ghana',
        team1Flag: 'assets/img/Ghana.svg',
        team2: 'Brazil',
        team2Flag: 'assets/img/Brazil.svg',
        score: '1 - 3',
        status: 'Full-Time',
        date: '17 December 2024',
      },
      {
        team1: 'Uruguay',
        team1Flag: 'assets/img/Uru.svg',
        team2: 'Poland',
        team2Flag: 'assets/img/Poland.svg',
        score: '1 - 0',
        status: 'Full-Time',
        date: '17 December 2024',
      },
    ];
  }
}
