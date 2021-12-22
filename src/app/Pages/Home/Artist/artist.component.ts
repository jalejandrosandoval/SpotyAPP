import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IArtists } from 'src/app/Interfaces/Artists.interface';

import { ITopTracks } from 'src/app/Interfaces/TopTracks.interfaces';
import { SpotifyService } from 'src/app/Services/Spotify/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  // Variables Initialization
  public _artists: IArtists = {} as IArtists;
  public _topTracks: ITopTracks = {} as ITopTracks;
  public _loading: boolean;

  constructor(private _router: ActivatedRoute,
    private _spotifyService: SpotifyService,
    private _toastr: ToastrService) { 
    this._loading = false;
    this.route();
  }

  ngOnInit(): void {
  }

  private route(){
    this._router.params.subscribe(
      params => {
        this.getArtist(params['id']);
        this.getTopTracks(params['id']);
      }
    )
  }

  public getArtist(_Id: string){
    this._loading = true;
    this._spotifyService.getArtist(_Id).subscribe(
      {
        next: (_res) =>{
          this._artists = _res;
          this._loading = false;
        },
        error: ({ error }: HttpErrorResponse) => {
          this._toastr.error(`An error has occurred: ${error.error.status} - ${error.error.message} `, "Error");
          this._loading = false;
        }
      }
    );
  }

  public getTopTracks(_Id: string){
    this._loading = true;
    this._spotifyService.getTopTracks(_Id).subscribe(
      {
        next: (_res) =>{
          this._topTracks = _res;
          this._loading = false;
        },
        error: ({ error }: HttpErrorResponse) => {
          this._toastr.error(`An error has occurred: ${error.error.status} - ${error.error.message} `, "Error");
          this._loading = false;
        }
      }
    );
  }
}
