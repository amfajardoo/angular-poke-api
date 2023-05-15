import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, computed, inject } from '@angular/core';
import { PokeapiService } from './pokeapi.service';
import { PokemonCardComponent } from './pokemon-card';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


}
