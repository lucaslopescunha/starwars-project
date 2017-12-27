import { TestBed, inject } from '@angular/core/testing';

import { CharactersService } from './characters.service';

describe('CharactersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharactersService]
    });
  });

  xit('should be created', inject([CharactersService], (service: CharactersService) => {
    expect(service).toBeTruthy();
  }));
});
