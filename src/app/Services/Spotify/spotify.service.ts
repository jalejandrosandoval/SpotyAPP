import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IAlbums, IArtist } from 'src/app/Interfaces/Albums.interface';
import { ITopTracks } from 'src/app/Interfaces/TopTracks.interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _httpClient: HttpClient) { }

  // Method for get the Query
  private getQuery(_Query: string, _method: string = 'get'): Observable<any>{
    let _url = `${environment.Spotify.URL.API_URL_Spotify}${_Query}`;
    return this._httpClient.request(_method,_url);
  }

  // Method for the releases
  public getNewReleases(): Observable<IAlbums[]>{
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(
        map(
          (data: any) => data['albums'].items
        )
      );
  }

  // Method fot get the Artists
  public getArtist(_Id: string): Observable<IArtist[]>{
    return this.getQuery(`artists/${_Id}`);
  }

  // Method fot get the TopTracks
  public getTopTracks(_Id: string, _CountryCode: string = 'us'): Observable<ITopTracks[]>{
    return this.getQuery(`artists/${_Id}/top-tracks?country=${_CountryCode}`);
  }

}