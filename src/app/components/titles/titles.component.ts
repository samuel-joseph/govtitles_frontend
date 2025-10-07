import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EcfrService } from 'src/app/services/ecfr.service';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.css'],
})
export class TitlesComponent implements OnInit {
  titles: any[] = [];

  constructor(private analysisService: EcfrService, private router: Router) {}

  ngOnInit(): void {

  this.analysisService.getTitles().subscribe((res) => {
    if (!res || !res.length) {
      console.error("No titles found in response!");
      this.titles = [];
      return;
    }
      this.titles = res; 
    });
  }

  goToDetail(titleNumber: number) {
    this.router.navigate(['/titles', titleNumber]);
  }
}
