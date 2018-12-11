import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  artistasList: any[] = [];

  requestError: string;

  loadingFlag = false;
  errorFrlag = false;

  constructor( private service: SpotifyService) {
    this.loadingFlag = true;
    this.errorFrlag = false;

    this.service.requestBrowse()
    .subscribe((data: any) => {
        this.loadingFlag = false;
        this.artistasList = data;
        console.log(this.artistasList);
    }, ( error ) => {
      this.loadingFlag = false;
      this.errorFrlag = true;
      this.requestError = error.error.error.message;
      console.log( error );
    });
  }

  ngOnInit() {
  }

}
