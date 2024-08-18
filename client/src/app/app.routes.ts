import { Routes } from '@angular/router';
import {
  MainComponent,
  MoviesComponent,
  BooksComponent,
  MusicComponent,
  PhotosComponent,
  GamesComponent,
  MessengerComponent,
} from '../pages';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'books', component: BooksComponent },
  { path: 'music', component: MusicComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'games', component: GamesComponent },
  { path: 'messenger', component: MessengerComponent },
  { path: '**', redirectTo: '' },
];
