import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ExercicisService } from './exercicis.service';

describe('ExercicisService', () => {
  let service: ExercicisService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });

    service = TestBed.inject(ExercicisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
