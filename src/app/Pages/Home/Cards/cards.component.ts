import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAlbums } from 'src/app/Interfaces/Albums.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  // Variables Initialization
  @Input() albums: IAlbums[] = [];

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  // Method for see the artist in the album X.
  public lookArtist(_album: IAlbums){
    let fisrtArtistId = _album.artists[0].id;
    this._router.navigate(['home/artist', fisrtArtistId]);
  }

}