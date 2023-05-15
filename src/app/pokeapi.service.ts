import { Injectable, Signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { toSignal } from "@angular/core/rxjs-interop";
import { CustomPokemon, PokeAPIResponse, Pokemon, Result } from './pokeapi';
import { catchError, combineLatest, map, of, switchMap } from 'rxjs';

@Injectable()
export class PokeapiService {
  httpService = inject(HttpClient);
  private url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=40';
  private defaultPokeApiResponse: CustomPokemon[] = []

  getAll(){
    return toSignal(this.httpService.get<PokeAPIResponse>(this.url).pipe(
      switchMap(({ results }) => {
        const pokemonData = results.map(item => this.httpService.get<Pokemon>(item.url))
        return combineLatest(pokemonData).pipe(
          map<Pokemon[], CustomPokemon[]>((pokemons) => (results.map(({ name }, index) => ({
            name,
            url: pokemons[index].sprites.front_default,
            id: pokemons[index].id
          }))))
        )
      }),
      catchError(() => of(this.defaultPokeApiResponse))
    ));
  }
}
