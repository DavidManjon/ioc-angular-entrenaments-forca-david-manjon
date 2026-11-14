import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  Subject,
  BehaviorSubject,
  map,
  switchMap,
  startWith,
  catchError,
  finalize,
  of,
  shareReplay,
  tap,
  throwError
} from 'rxjs';

import { API_BASE_URL } from '../core/config/api.config';
import { ExerciciApi } from '../models/exercici-api.model';
import { Exercici } from '../models/exercici.model';
import {
  adaptarExercici,
  adaptarExercicis
} from '../adapters/exercici.adapter';

@Injectable({
  providedIn: 'root'
})
export class ExercicisService {

  private http = inject(HttpClient);

  private apiUrl = `${API_BASE_URL}/exercicis`;

  private recarregaSubject = new Subject<void>();

  private carregantSubject = new BehaviorSubject<boolean>(false);
  public carregant$ = this.carregantSubject.asObservable();

  private errorSubject = new BehaviorSubject<string | null>(null);
  public error$ = this.errorSubject.asObservable();

  public exercicis$: Observable<Exercici[]> = this.recarregaSubject.pipe(
    startWith(undefined),

    switchMap(() => {
      this.carregantSubject.next(true);
      this.errorSubject.next(null);

      return this.http.get<ExerciciApi[]>(this.apiUrl).pipe(
        map(adaptarExercicis),

        catchError(() => {
          this.errorSubject.next('No s’han pogut carregar els exercicis.');
          return of([]);
        }),

        finalize(() => {
          this.carregantSubject.next(false);
        })
      );
    }),

    shareReplay(1)
  );

  public crearExercici(exercici: Omit<Exercici, 'id'>): Observable<Exercici> {
    const exerciciApi = {
      nom: exercici.nom,
      descripcio: exercici.descripcio,
      categoria: exercici.categoria,
      data: exercici.data,
      series: exercici.series,
      destacat: exercici.destacat
    };

    this.errorSubject.next(null);

    return this.http.post<ExerciciApi>(this.apiUrl, exerciciApi).pipe(
      map(adaptarExercici),
      tap(() => this.reintentarUltimaConsulta()),
      catchError(error => {
        this.errorSubject.next('No s’ha pogut crear l’exercici.');
        return throwError(() => error);
      })
    );
  }

  public comprovarTerme(terme: string): Observable<boolean> {
    const termeNormalitzat = terme.trim().toLowerCase();

    return this.http.get<ExerciciApi[]>(this.apiUrl).pipe(
      map(adaptarExercicis),
      map(exercicis =>
        exercicis.some(exercici =>
          exercici.nom.toLowerCase().includes(termeNormalitzat) ||
          exercici.descripcio.toLowerCase().includes(termeNormalitzat)
        )
      )
    );
  }

  public reintentarUltimaConsulta(): void {
    this.recarregaSubject.next();
  }
}
