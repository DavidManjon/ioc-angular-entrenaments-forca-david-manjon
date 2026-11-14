import { ExerciciApi } from '../models/exercici-api.model';
import { Exercici } from '../models/exercici.model';

export function adaptarExercici(exerciciApi: ExerciciApi): Exercici {
  return {
    id: Number(exerciciApi.id) || 0,

    nom: exerciciApi.nom?.trim() || 'Exercici sense nom',

    descripcio:
      exerciciApi.descripcio?.trim() || 'Sense descripció disponible',

    categoria:
      exerciciApi.categoria?.trim() || 'Altres',

    data: exerciciApi.data?.trim() || '2026-01-01',

    nivell: 'Principiant',

    series: Math.max(0, Number(exerciciApi.series) || 0),

    destacat: exerciciApi.destacat ?? false
  };
}

export function adaptarExercicis(exercicisApi: ExerciciApi[]): Exercici[] {
  return exercicisApi.map(adaptarExercici);
}