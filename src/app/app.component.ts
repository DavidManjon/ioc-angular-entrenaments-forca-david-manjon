
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exercici } from './models/exercici.model';
import { EXERCICIS_MOCK } from './models/exercicis.mock';
import { ExerciciList } from './components/exercici-list/exercici-list.component';
import { ExerciciFilters } from './components/exercici-filters/exercici-filters.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ExerciciList,
    ExerciciFilters
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.component.scss',
})
export class App {
  public appName = 'Entrenament de força';

  public exercicis: Exercici[] = EXERCICIS_MOCK;
  public exercicisFiltrats: Exercici[] = [...this.exercicis];
  public exerciciSeleccionat: Exercici | null = null;

  public aplicarFiltres(filtres: { text: string; categoria: string }): void {
  this.exercicisFiltrats = this.exercicis.filter(exercici => {
    const coincideixText = exercici.nom
      .toLowerCase()
      .includes(filtres.text.trim().toLowerCase());

    const coincideixCategoria =
      filtres.categoria === 'Totes' ||
      exercici.categoria === filtres.categoria;

    return coincideixText && coincideixCategoria;
  });
}

  public seleccionarExercici(exercici: Exercici): void {
    this.exerciciSeleccionat = exercici;
  }
}
