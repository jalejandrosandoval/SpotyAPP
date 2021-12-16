import { Component, OnInit } from '@angular/core';
import { IArtist } from 'src/app/Interfaces/Albums.interface';
import { ITopTracks } from 'src/app/Interfaces/TopTracks.interfaces';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  // Variables Initialization
  public _artist: IArtist = {} as IArtist;
  public _topTracks: ITopTracks[] = [];
  private _loading: boolean;

  constructor() { 
    this._loading = false;
  }

  ngOnInit(): void {
  }

}
