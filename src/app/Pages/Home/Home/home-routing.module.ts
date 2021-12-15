import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from '../Artist/artist.component';
import { MainComponent } from '../Main/main.component';
import { SearchComponent } from '../Search/search.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'main', component: MainComponent },
      { path: 'search', component: SearchComponent },
      { path: 'artist', component: ArtistComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
