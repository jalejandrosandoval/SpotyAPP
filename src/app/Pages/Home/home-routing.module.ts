import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './Artist/artist.component';
import { MainComponent } from './Main/main.component';
import { SearchComponent } from './Search/search.component';
import { HomeComponent } from './Home/home.component';
import { ChatComponent } from './Chat/chat.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'main', component: MainComponent },
      { path: 'search', component: SearchComponent },
      { path: 'artist/:id', component: ArtistComponent },
      { path: 'chat', component: ChatComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
