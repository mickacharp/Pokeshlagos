import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllPokemonsService } from '../all-pokemons.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  // pokemonSeen: any[] = this.pokemonService.pokemonOpened;
  currentPokemon: any = {};

  constructor(
    private pokemonService: AllPokemonsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getOnePokemon();
    this.pokemonService.pokemonWanted.subscribe(
      (pokemon) => (this.currentPokemon = pokemon)
    );
  }

  previousPokemon(): void {
    this.router
      .navigate([`/pokemon/${this.currentPokemon.id - 1}`])
      .then(() => this.getOnePokemon());
  }

  nextPokemon(): void {
    this.router
      .navigate([`/pokemon/${this.currentPokemon.id + 1}`])
      .then(() => this.getOnePokemon());
  }

  getOnePokemon(): void {
    const id: string = this.route.snapshot.paramMap.get('id') as string;
    this.pokemonService.getOnePokemon(id).subscribe((pokemon) => {
      this.pokemonService.pokemonWanted.next(pokemon);
    });

    // Doesn't work, try to know why later
    // this.pokemonService.getOnePokemon(id).subscribe((pokemon) => {
    //   this.pokemonService.pokemonOpened.some((p) => {
    //     p.id == id;
    //   }) === true
    //     ? console.log('Ce pokémon existe déjà')
    //     : this.pokemonService.pokemonOpened.push(pokemon);
    // });
  }
}
