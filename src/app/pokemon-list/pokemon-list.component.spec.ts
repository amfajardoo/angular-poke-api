import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListComponent } from './pokemon-list.component';
import { PokeApiService } from '../poke-api.service';
import { PokemonCardComponent } from '../pokemon-card';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, HttpClientModule, PokemonCardComponent, PokemonListComponent],
      providers: [PokeApiService]
    });
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
