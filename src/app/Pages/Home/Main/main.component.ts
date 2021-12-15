import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/Services/Spotify/spotify.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.getReleases();
  }

  private getReleases(){
    this._spotifyService.getNewReleases().subscribe(
      (data: any)=>{
        console.log(data);
      }
    );
  }

}
