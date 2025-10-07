import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcfrService } from 'src/app/services/ecfr.service';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-title-detail',
  templateUrl: './title-detail.component.html',
  styleUrls: ['./title-detail.component.css']
})
export class TitleDetailComponent implements OnInit {
  titleNumber!: number;
  chartData!: ChartConfiguration['data'];
  chartType: ChartConfiguration['type'] = 'bar';
  historicalChanges: { [key: string]: number } = {};

  constructor(
    private route: ActivatedRoute,
    private analysisService: EcfrService
  ) {}

  ngOnInit(): void {
    this.titleNumber = Number(this.route.snapshot.paramMap.get('id'));

    this.analysisService.getTitles(this.titleNumber).subscribe((data) => {
      const titleData = data[0];

      this.chartData = {
        labels: ['Word Count', 'Avg Sentence Length', 'Paragraph Count', 'Sentence Count'],
        datasets: [
          {
            data: [
              titleData.wordCount,
              titleData.avgSentenceLength,
              titleData.paragraphCount,
              titleData.sentenceCount,
            ],
            label: titleData.name,
            backgroundColor: [
              'rgba(54, 162, 235, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(153, 102, 255, 0.6)',
            ],
          },
        ],
      };
      this.historicalChanges = titleData.historicalChanges || {};
    });
  }
}
