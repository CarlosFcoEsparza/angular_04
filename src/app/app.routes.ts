
import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/search/search.component';
import { ArtistaComponent } from './component/artista/artista.component';

export const ROUTERS: Routes = [
    { path: 'home',  component: HomeComponent },
    { path: 'search',  component: SearchComponent },
    { path: 'artista/:id', component: ArtistaComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
