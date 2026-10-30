import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExerciciCard } from './exercici-card.component';

describe('ExerciciCard', () => {
  let component: ExerciciCard;
  let fixture: ComponentFixture<ExerciciCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciciCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciciCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
