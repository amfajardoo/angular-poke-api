import { Routes } from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail';
import { PokemonListComponent } from './pokemon-list';

export const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
  {
    path: 'pokemon/:id',
    component: PokemonDetailComponent,
  },
];
