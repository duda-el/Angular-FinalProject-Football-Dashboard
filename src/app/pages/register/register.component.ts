import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule], // Include necessary modules
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Corrected property name to styleUrls
})
export class RegisterComponent {
  registerData = { name: '', email: '', password: '', password_confirmation: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.register(this.registerData).subscribe({
      next: (response) => {
        console.log('Registration successful');
        this.router.navigate(['/login']); // Redirect to login page
      },
      error: (err) => {
        console.error('Registration failed', err);
      }
    });
  }
}
