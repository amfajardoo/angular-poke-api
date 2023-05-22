import { Injectable, Signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { toSignal } from "@angular/core/rxjs-interop";
import { CustomPokemon, PokeAPIResponse, Pokemon, Result } from './poke-api.interface';
import { catchError, combineLatest, map, of, switchMap } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable()
export class PokeApiService {
  httpService = inject(HttpClient);
  private url = environment.POKE_URI;
  private defaultPokeApiResponse: CustomPokemon[] = []

  getAll(){
    return toSignal(this.httpService.get<PokeAPIResponse>(this.url).pipe(
      switchMap(({ results }) => {
        const pokemonData = results.map(item => this.httpService.get<Pokemon>(item.url))
        return combineLatest(pokemonData).pipe(
          map<Pokemon[], CustomPokemon[]>((pokemonList) => (results.map(({ name }, index) => ({
            name,
            url: pokemonList[index].sprites.front_default,
            id: pokemonList[index].id
          }))))
        )
      }),
      catchError(() => of(this.defaultPokeApiResponse))
    ));
  }
}
