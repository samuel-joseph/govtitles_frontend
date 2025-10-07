import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Title } from 'chart.js';
import { TitlesComponent } from './components/titles/titles.component';
import { TitleDetailComponent } from './components/title-detail/title-detail.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'titles', component: TitlesComponent },
  { path: 'titles/:id', component: TitleDetailComponent },
  { path: 'statistics', component: StatisticsComponent }, 
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
