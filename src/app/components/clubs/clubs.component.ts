import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClubService } from '../../services/club.service';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-clubs',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ClubsComponent {
  clubs: any[] = [];
  favorites: any[] = [];

  constructor(private clubService: ClubService) {}

  ngOnInit(): void {
    this.loadClubs();
    this.subscribeToFavorites();
  }

  // Load all clubs from the service
  loadClubs(): void {
    this.clubService.getClubs().subscribe((data) => {
      this.clubs = data;
    });
  }

  // Subscribe to favorites from the service
  subscribeToFavorites(): void {
    this.clubService.getFavoriteClubs().subscribe((favorites) => {
      this.favorites = favorites;
    });
  }

  // Toggle favorite status
  toggleFavorite(clubId: number): void {
    this.clubService.toggleFavoriteClub(clubId);
  }

  // Check if a club is already a favorite
  isFavorite(clubId: number): boolean {
    return this.favorites.some((fav) => fav.id === clubId);
  }
}
