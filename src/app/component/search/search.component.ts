import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  result: any[] = [];
  loadingFlag = false;

  constructor( private service: SpotifyService) {
  }

  search( value: string ) {
    this.loadingFlag = true;
    console.log('Buscar: ' + value);
    this.service.requestSearch(value)
    .subscribe((data: any) => {
      this.loadingFlag = false;
        this.result = data;
        console.log(this.result);
    });
  }
  ngOnInit() {
  }

}
