import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  onSelect(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    if (value === 'titles') {
      this.router.navigate(['/titles']);
    } else if (value === 'statistics') {
      this.router.navigate(['/statistics']);
    }
  }
}
