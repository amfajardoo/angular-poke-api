import { Component, Input, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Result } from '../poke-api.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input({ required: true }) data?: Result;
  router = inject(Router);


  seePokemonDetails() {
    this.router.navigateByUrl(`pokemon/${this.data?.name}`)
  }
}
