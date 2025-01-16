import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Standing } from '../interfaces/standing.interface';

@Injectable({
  providedIn: 'root',
})
export class StandingsService {
  private apiUrl = 'http://127.0.0.1:8000/api/standings';

  constructor(private http: HttpClient) {}

  getStandings(): Observable<Standing[]> {
    return this.http.get<Standing[]>(this.apiUrl);
  }
}
