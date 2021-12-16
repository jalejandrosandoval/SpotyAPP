import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IAlbums } from 'src/app/Interfaces/Albums.interface';
import { SpotifyService } from 'src/app/Services/Spotify/spotify.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // Variables Initialization
  public newAlbums: IAlbums[] = [];
  public _loading: boolean;

  constructor(private _spotifyService: SpotifyService,
    private _toastr: ToastrService) { 
    this._loading = false;
  }

  ngOnInit(): void {
    this.getAlbumReleases();
  }

  // Method for get new Albums
  private getAlbumReleases(){
    this._loading = true;
    this._spotifyService.getNewReleases().subscribe(
      {
        next: (data) => {
          this.newAlbums = data;
          this._loading = false;
        },
        error: ({ _error }) => {
          this._toastr.error(`An error has occurred: ${_error}`, "Error");
          this._loading = false;
        }
      }
    );
  }

}