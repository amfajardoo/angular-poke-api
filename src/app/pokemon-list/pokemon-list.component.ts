import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PokemonCardComponent } from '../pokemon-card';
import { PokeApiService } from '../poke-api.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, PokemonCardComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  pokeApiService = inject(PokeApiService);

  result = this.pokeApiService.getAll();
  noDataAvailable = computed(() => this.result()?.length === 0);
}
