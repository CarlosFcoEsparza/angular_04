import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  loadingFlag = false;
  artista: any;
  topTracks: any[] = [];

  constructor(private activedRouter: ActivatedRoute,
            private service: SpotifyService) {
    this.activedRouter.params.subscribe( params => {
      console.log(params);
      this.artista = params;
    });

    this.loadingFlag = true;

    this.service.requestArtista( this.artista.id )
    .subscribe((data: any) => {
        this.loadingFlag = false;
        this.artista = data;
        console.log(this.artista);
    });

    this.service.requestTopTracks( this.artista.id )
    .subscribe((data: any) => {
      console.log( data );
      this.topTracks = data;
    });
  }

  ngOnInit() {
  }

}
