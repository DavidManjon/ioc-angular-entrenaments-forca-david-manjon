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

    fixture.componentRef.setInput('exercici', {
      id: 1,
      nom: 'Sentadilla',
      descripcio: 'Exercici de força per a les cames',
      categoria: 'Cames',
      data: '2026-11-14',
      nivell: 'Principiant',
      series: 3,
      destacat: false
    });

    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});