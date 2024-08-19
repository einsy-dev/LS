import { Routes } from '@angular/router';
import {
  MainComponent,
  MoviesComponent,
  MovieComponent,
  BooksComponent,
  MusicComponent,
  PhotosComponent,
  GamesComponent,
  MessengerComponent,
} from '../pages';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'books', component: BooksComponent },
  { path: 'music', component: MusicComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'games', component: GamesComponent },
  { path: 'messenger', component: MessengerComponent },
  { path: '**', redirectTo: '' },
];
