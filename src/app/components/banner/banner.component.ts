import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  imports: [CommonModule],
})
export class BannerComponent implements OnInit, OnDestroy {
  // Countdown values
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  private countdownInterval: any;
  private matchTimerInterval: any;


  matchMinutes: number = 88;
  matchSeconds: number = 30;
  matchTime: string = '88 : 30';


  team1Score: number = 2;
  team2Score: number = 2;


  team1Stats = {
    shotsOnTarget: 7,
    shots: 12,
    fouls: 7,
  };

  team2Stats = {
    shotsOnTarget: 3,
    shots: 7,
    fouls: 3,
  };

  ngOnInit(): void {
    this.startCountdown(new Date('2025-01-18T23:59:59'));
    this.startMatchTimer();
  }

  ngOnDestroy(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
    if (this.matchTimerInterval) {
      clearInterval(this.matchTimerInterval);
    }
  }

  startCountdown(eventDate: Date): void {
    const targetDate = eventDate.getTime();

    this.countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(this.countdownInterval);
        this.days = this.hours = this.minutes = this.seconds = 0;
        return;
      }

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
  }

  startMatchTimer(): void {
    this.matchTimerInterval = setInterval(() => {
      this.matchSeconds++;

      if (this.matchSeconds >= 60) {
        this.matchSeconds = 0;
        this.matchMinutes++;
      }

      if (this.matchMinutes >= 90) {
        clearInterval(this.matchTimerInterval);
        this.matchTime = '🔴 Game Ended';
        return;
      }

      this.matchTime = this.formatMatchTime(
        this.matchMinutes,
        this.matchSeconds
      );
    }, 1000);
  }

  formatMatchTime(minutes: number, seconds: number): string {
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    return `${formattedMinutes} : ${formattedSeconds}`;
  }

  calculateWidth(value1: number, value2: number): number {
    const total = value1 + value2;
    if (total === 0) return 50;
    return (value1 / total) * 100;
  }
}
