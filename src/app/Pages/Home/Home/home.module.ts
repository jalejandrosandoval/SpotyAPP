import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavBarModule } from 'src/app/Components/Shared/nav-bar/nav-bar.module';
import { UsersModule } from '../../Users/users.module';
import { FooterModule } from 'src/app/Components/Shared/footer/footer.module';
import { HomeComponent } from './home.component';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { ArtistComponent } from '../Artist/artist.component';
import { CardsComponent } from '../Cards/cards.component';
import { MainComponent } from '../Main/main.component';
import { SearchComponent } from '../Search/search.component';
import { SpotifyService } from 'src/app/Services/Spotify/spotify.service';
import { AuthInterceptor } from 'src/app/Interceptors/Auth/auth.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    ArtistComponent,
    CardsComponent,
    MainComponent,
    SearchComponent    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    NavBarModule,
    FooterModule,
    UsersModule,
    FooterModule
  ],
  providers:[
    AuthService,
    SpotifyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
})
export class HomeModule { }