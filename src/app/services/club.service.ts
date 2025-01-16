import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClubService {
  private clubs = [
    { id: 1, name: 'Chelsea', logo: 'assets/clubs/chelsea.svg', followed: false },
    { id: 2, name: 'Aston Villa', logo: 'assets/clubs/villa.svg', followed: false },
    { id: 3, name: 'Arsenal', logo: 'assets/clubs/arsenal.svg', followed: false },
    { id: 4, name: 'Liverpool', logo: 'assets/clubs/liver.svg', followed: false },
    { id: 5, name: 'Manchester United', logo: 'assets/clubs/utd.svg', followed: false },
    { id: 6, name: 'West Ham', logo: 'assets/clubs/west.svg', followed: false },
    { id: 7, name: 'Manchester City', logo: 'assets/clubs/city.svg', followed: false },
  ];

  private favoriteClubsSubject = new BehaviorSubject<any[]>([
    { id: 1, name: 'Chelsea', logo: 'assets/clubs/chelsea.svg' },
  ]);

  constructor() {}


  getClubs(): Observable<any[]> {
    return of(this.clubs);
  }


  getFavoriteClubs(): Observable<any[]> {
    return this.favoriteClubsSubject.asObservable();
  }


  toggleFavoriteClub(clubId: number): void {
    const favorites = this.favoriteClubsSubject.value;
    const club = this.clubs.find((c) => c.id === clubId);

    if (club) {
      const index = favorites.findIndex((fav) => fav.id === club.id);
      if (index === -1) {

        this.favoriteClubsSubject.next([
          ...favorites,
          { id: club.id, name: club.name, logo: club.logo },
        ]);
      } else {

        this.favoriteClubsSubject.next(
          favorites.filter((fav) => fav.id !== club.id)
        );
      }
    }
  }
}
