import { Component, OnInit } from '@angular/core';
import { ClubService } from '../../services/club.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  imports: [RouterModule, CommonModule],
  styleUrls: ['./leftnav.component.css'],
})
export class LeftnavComponent implements OnInit {
  favorites: any[] = [];

  constructor(private clubService: ClubService) {}

  ngOnInit(): void {
    this.subscribeToFavorites();
  }

  // Subscribe to favorite clubs
  subscribeToFavorites(): void {
    this.clubService.getFavoriteClubs().subscribe((favorites) => {
      this.favorites = favorites;
    });
  }
}
