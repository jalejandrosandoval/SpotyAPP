import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'DomSafe'
})
export class DomSafePipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) { }

  transform(value: string): any {
    var url = environment.Spotify.URL.DomSafe;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
