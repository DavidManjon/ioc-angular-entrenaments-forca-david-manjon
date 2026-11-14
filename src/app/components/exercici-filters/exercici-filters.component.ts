import { Component, Output, EventEmitter, inject } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable, catchError, filter, map, of, switchMap, take, timer } from 'rxjs';
import { ExercicisService } from '../../services/exercicis.service';

@Component({
  selector: 'app-exercici-filters',
  imports: [ReactiveFormsModule],
  templateUrl: './exercici-filters.component.html',
  styleUrl: './exercici-filters.component.scss',
})
export class ExerciciFilters {
  @Output() filtreCanviat = new EventEmitter<{ text: string; categoria: string }>();
  private readonly clauHistorial = 'historial-cerques-exercicis';

  public historial: { text: string; categoria: string }[] = [];

  constructor() {
    this.carregarHistorial();
  }
  private exercicisService = inject(ExercicisService);

  private validarTerme(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const terme = String(control.value ?? '').trim();

      if (terme.length < 3) {
        return of(null);
      }

      return timer(500).pipe(
        switchMap(() => this.exercicisService.comprovarTerme(terme)),
        map((teResultats) => (teResultats ? null : { senseResultats: true })),
        catchError(() => of({ errorConsulta: true })),
      );
    };
  }

  public formulari = new FormGroup({
    textCerca: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
      asyncValidators: [this.validarTerme()],
    }),
    categoriaSeleccionada: new FormControl('Totes', {
      nonNullable: true,
    }),
  });

  public categories: string[] = [
    'Totes',
    'Cames',
    'Pit',
    'Esquena',
    'Esquena i cames',
    'Espatlles',
    'Braços',
    'Abdominals',
  ];

  public aplicarFiltres(): void {
    if (!this.formulari.valid) {
      return;
    }

    const valors = this.formulari.getRawValue();

    const cerca = {
      text: valors.textCerca.trim(),
      categoria: valors.categoriaSeleccionada,
    };

    this.desarHistorial(cerca);
    this.filtreCanviat.emit(cerca);
  }

  public restablirFiltres(): void {
    this.formulari.reset({
      textCerca: '',
      categoriaSeleccionada: 'Totes',
    });

    this.filtreCanviat.emit({
      text: '',
      categoria: 'Totes',
    });
  }

  private carregarHistorial(): void {
    try {
      const dades = localStorage.getItem(this.clauHistorial);

      if (dades) {
        const historialLlegit = JSON.parse(dades);

        if (Array.isArray(historialLlegit)) {
          this.historial = historialLlegit
            .filter(
              (cerca): cerca is { text: string; categoria: string } =>
                typeof cerca?.text === 'string' && typeof cerca?.categoria === 'string',
            )
            .slice(0, 5);
        }
      }
    } catch {
      this.historial = [];
    }
  }

  private desarHistorial(cerca: { text: string; categoria: string }): void {
    const ultimaCerca = this.historial[0];

    if (
      ultimaCerca &&
      ultimaCerca.text.toLowerCase() === cerca.text.toLowerCase() &&
      ultimaCerca.categoria === cerca.categoria
    ) {
      return;
    }

    this.historial = [cerca, ...this.historial].slice(0, 5);

    try {
      localStorage.setItem(this.clauHistorial, JSON.stringify(this.historial));
    } catch {
      return;
    }
  }

  public recuperarCerca(cerca: { text: string; categoria: string }): void {
    this.formulari.statusChanges
      .pipe(
        filter((estat) => estat === 'VALID'),
        take(1),
      )
      .subscribe(() => {
        const valors = this.formulari.getRawValue();

        this.filtreCanviat.emit({
          text: valors.textCerca.trim(),
          categoria: valors.categoriaSeleccionada,
        });
      });

    this.formulari.patchValue({
      textCerca: cerca.text,
      categoriaSeleccionada: cerca.categoria,
    });
  }
}
