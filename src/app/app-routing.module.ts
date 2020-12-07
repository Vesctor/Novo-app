import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SeriesInfoComponent } from './series/series-info.component';
import { SeriesListComponent } from './series/series-list.component';
import { SeriesService } from './series/series.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'series',
    component: SeriesListComponent
  },
  {
    path: 'series/info/:id',
    component: SeriesInfoComponent
  },
  {
    path: 'series/service',
    component: SeriesService
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
