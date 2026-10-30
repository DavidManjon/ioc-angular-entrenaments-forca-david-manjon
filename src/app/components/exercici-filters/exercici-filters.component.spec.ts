import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExerciciFilters } from './exercici-filters.component';

describe('ExerciciFilters', () => {
  let component: ExerciciFilters;
  let fixture: ComponentFixture<ExerciciFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciciFilters],
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciciFilters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
