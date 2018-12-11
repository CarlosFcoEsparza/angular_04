import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  KEY = 'BQAGyDwGVxZrvU5pt54ieLsk7bfZv6t1r_uA7exeQ4ul1RbWtt13astwRj_A3V1sV3_HcP5bEjbT2GLsTuA';

  constructor(private http: HttpClient) {
  }

  getQuery( request: string ) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.KEY
    });

    return this.http.get('https://api.spotify.com/v1/' + request, { headers });
  }

  requestBrowse() {
    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map( (data: any) => {
      return data.albums.items;
    } ));
  }

  requestSearch(part: string) {
    return this.getQuery('search?q=' + part + '&type=artist&limit=20')
    .pipe( map( (data: any) => {
      return data.artists.items;
    } ));
  }

  requestArtista(part: string) {
    return this.getQuery('artists/' + part);
  }

  requestTopTracks( id: string ) {
    return this.getQuery('artists/' + id + '/top-tracks?country=us')
      .pipe(map( (data: any) => {
        return data.tracks;
      }));
  }
}
