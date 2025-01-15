import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add CommonModule here
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  isAuthenticated = false; // Tracks if the user is logged in
  userName: string | null = null; // Stores the logged-in user's name

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.checkAuthentication();
  }

  // Check if the user is authenticated and get the user's name
  private checkAuthentication(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    if (this.isAuthenticated) {
      const user = this.authService.getUser();
      this.userName = user ? user.name : null;
    }
  }

  // Logout and navigate to the login page
  logout(): void {
    this.authService.logout();
    this.isAuthenticated = false;
    this.userName = null;
    this.router.navigate(['/login']); // Redirect to the login page
  }
}
