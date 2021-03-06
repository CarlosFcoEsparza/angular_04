import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html'
})
export class TarjetaComponent implements OnInit {

  @Input() items: any[] = [];

  constructor( private router: Router) { }

  ngOnInit() {
  }

  goArtista( item: any ) {
    let artistaId;

    if ( item.type === 'artist' ) {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate([ '/artista', artistaId ]);
  }
}
