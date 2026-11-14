import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Component, ChangeDetectionStrategy, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Exercici } from './models/exercici.model';
import { ExercicisService } from './services/exercicis.service';
import { ExerciciList } from './components/exercici-list/exercici-list.component';
import { ExerciciFilters } from './components/exercici-filters/exercici-filters.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ExerciciList,
    ExerciciFilters,
    DatePipe,
    FormsModule
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.component.scss',
})
export class App implements OnInit {
  public appName = 'Entrenament de força';

  private exercicisService = inject(ExercicisService);
  private cdr = inject(ChangeDetectorRef);

  public exercicis: Exercici[] = [];
  public exercicisFiltrats: Exercici[] = [];
  public exerciciSeleccionat: Exercici | null = null;
  public carregant = false;
  public error: string | null = null;

  public nouExercici = {
    nom: '',
    descripcio: '',
    categoria: 'Força',
    data: '2026-11-14',
    nivell: 'Principiant',
    series: 3,
    destacat: false
  };

  public missatgeCreacio = '';

  ngOnInit(): void {
    this.exercicisService.carregant$.subscribe(carregant => {
      this.carregant = carregant;
      this.cdr.markForCheck();
    });

    this.exercicisService.error$.subscribe(error => {
      this.error = error;
      this.cdr.markForCheck();
    });

    this.exercicisService.exercicis$.subscribe(exercicisAdaptats => {
      this.exercicis = exercicisAdaptats;
      this.exercicisFiltrats = [...this.exercicis];
      this.cdr.markForCheck();
    });
  }

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

  public reintentar(): void {
    this.exercicisService.reintentarUltimaConsulta();
  }

  public crearExercici(): void {
    this.missatgeCreacio = '';

    this.exercicisService.crearExercici(this.nouExercici).subscribe({
      next: (exerciciCreat) => {
        this.missatgeCreacio = `Exercici "${exerciciCreat.nom}" creat correctament.`;

        this.nouExercici = {
         nom: '',
          descripcio: '',
          categoria: 'Força',
          data: '2026-11-14',
          nivell: 'Principiant',
          series: 3,
          destacat: false
        };
      },
      error: () => {
        this.missatgeCreacio = 'No s’ha pogut crear l’exercici.';
      }
    });
  }
}
