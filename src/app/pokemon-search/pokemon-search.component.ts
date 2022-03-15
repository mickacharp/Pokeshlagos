import { Component, OnInit } from '@angular/core';
import { AllPokemonsService } from '../all-pokemons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss'],
})
export class PokemonSearchComponent implements OnInit {
  pokemonSearched: string = '';

  constructor(
    private pokemonService: AllPokemonsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  getPokemonByName(pokemonName: string): void {
    this.pokemonService.getOnePokemon(pokemonName).subscribe((pokemon) => {
      this.pokemonService.pokemonWanted.next(pokemon);
      this.router.navigate([`/pokemon/${this.pokemonSearched}`]);
    });
  }
}
