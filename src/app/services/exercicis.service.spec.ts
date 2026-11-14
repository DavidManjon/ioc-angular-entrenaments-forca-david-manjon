import { TestBed } from '@angular/core/testing';
import { Exercicis } from './exercicis.service';

describe('Exercicis', () => {
  let service: Exercicis;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercicis);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
