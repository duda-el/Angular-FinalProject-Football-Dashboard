import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule], // Include necessary modules
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected the property name to styleUrls
})
export class LoginComponent {
  loginData = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.loginData).subscribe({
      next: (response) => {
        console.log('Login successful');
        this.router.navigate(['/']); // Redirect after login
      },
      error: (err) => {
        console.error('Login failed', err);
      }
    });
  }
}
