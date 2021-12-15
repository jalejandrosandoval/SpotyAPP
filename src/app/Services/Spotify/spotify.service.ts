import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _httpClient: HttpClient) { }

  // Method for get the Query
  private getQuery(_Query: string){
    let _url = `${environment.API_URL_Spotify}${_Query}`;
    return this._httpClient.get(_url);
  }

  // Method for the releases
  public getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(
        map(
          (data: any) => data['albums'].items
        )
      );
  }

}