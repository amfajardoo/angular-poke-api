import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PokeapiService } from '../pokeapi.service';
import { PokemonCardComponent } from '../pokemon-card';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, PokemonCardComponent],
  providers: [PokeapiService],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  pokeapiService = inject(PokeapiService);

  result = this.pokeapiService.getAll();
  noDataAvailable = computed(() => this.result()?.length === 0);
}
