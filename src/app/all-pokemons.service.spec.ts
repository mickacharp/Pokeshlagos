import { TestBed } from '@angular/core/testing';

import { AllPokemonsService } from './all-pokemons.service';

describe('AllPokemonsService', () => {
  let service: AllPokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllPokemonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
