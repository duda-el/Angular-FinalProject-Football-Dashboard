import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Import Router
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api/auth';
  private router!: Router;

  constructor(private http: HttpClient, private injector: Injector) {}

  private getRouter(): Router {
    if (!this.router) {
      this.router = this.injector.get(Router);
    }
    return this.router;
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        localStorage.setItem('jwt-token', response.access_token);

        if (response.user) {
          localStorage.setItem('user', JSON.stringify(response.user));
        } else {
          console.warn('No user details found in response');
        }

        this.getRouter().navigate(['/']);
      })
    );
  }

  register(data: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  getToken(): string | null {
    return localStorage.getItem('jwt-token');
  }

  logout(): void {
    localStorage.removeItem('jwt-token');
    localStorage.removeItem('user');
    this.getRouter().navigate(['']);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getUser(): any {
    try {
      const user = localStorage.getItem('user');
      if (!user) {
        console.warn('No user found in localStorage');
        return null;
      }
      return JSON.parse(user);
    } catch (error) {
      console.error('Invalid user data in localStorage:', error);
      return null;
    }
  }
}
