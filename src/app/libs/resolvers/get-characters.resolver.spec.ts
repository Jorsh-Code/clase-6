import { TestBed } from '@angular/core/testing';

import { GetCharactersResolver } from './get-characters.resolver';

describe('GetCharactersResolver', () => {
  let resolver: GetCharactersResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetCharactersResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
