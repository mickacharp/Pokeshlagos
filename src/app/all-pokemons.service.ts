import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllPokemonsService {
  // pokemonOpened: any[] = [];
  pokemonWanted: BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<any> {
    return this.http.get<any>(
      'https://pokeapi.co/api/v2/pokemon?offset=0&limit=898'
    );
  }

  getOnePokemon(idOrName: string): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
  }
}
