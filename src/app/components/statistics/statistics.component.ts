import { Component, OnInit } from '@angular/core';
import { EcfrService } from 'src/app/services/ecfr.service';
import { ChartConfiguration } from 'chart.js';

interface ChecksumItem {
  name: string;
  checksum: string;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  chartData!: ChartConfiguration['data'];
  chartType: ChartConfiguration['type'] = 'pie';
  loading = true;
  showChecksums = false;
  checksums: ChecksumItem[] = [];

  constructor(private analysisService: EcfrService) {}

  ngOnInit(): void {
      this.analysisService.getTitles().subscribe((titles: any[]) => {
    this.loading = false;

    if (!titles || titles.length === 0) {
      console.error("No titles available");
      return;
    }
    const labels = titles.map(title => title.name);
    const values = titles.map(title => title.wordCount || 0);

    this.chartData = {
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: [
            '#FF6384', '#36A2EB', '#FFCE56',
            '#4BC0C0', '#9966FF', '#FF9F40'
          ],
        },
      ],
    };

      this.analysisService.getChecksum().subscribe((data) => {
        this.checksums = data;
      }); 
    });
  }

  toggleChecksums(): void {
    this.showChecksums = !this.showChecksums;
  }
}
