import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcfrService {

  private apiUrl = "http://localhost:3000/api/analysis";

  constructor(private http: HttpClient) { }

  getTitles(title?: any): Observable<any> {
    let url = `${this.apiUrl}/titles`;
    if (title) {
      url += `?titleNumber=${title}`;
    }
    return this.http.get(`${this.apiUrl}/titles`);
  }

  getWordCount(title?: any): Observable<any> {
    let url = `${this.apiUrl}/wordcount`;
    if (title) {
      url += `?titleNumber=${title}`;
    }
    return this.http.get(url);
  }

  getHistoricalChanges(title: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/historical?titleNumber=${title}`);
  }

  getChecksum(): Observable<any> {
    return this.http.get(`${this.apiUrl}/checksum`);
  }
}
