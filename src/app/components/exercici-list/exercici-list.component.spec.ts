import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExerciciList } from './exercici-list.component';

describe('ExerciciList', () => {
  let component: ExerciciList;
  let fixture: ComponentFixture<ExerciciList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciciList],
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciciList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
