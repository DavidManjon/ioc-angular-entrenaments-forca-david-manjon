
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Exercici } from '../../models/exercici.model';
import { ExerciciCard } from '../exercici-card/exercici-card.component';

@Component({
  selector: 'app-exercici-list',
  imports: [ExerciciCard],
  templateUrl: './exercici-list.component.html',
  styleUrl: './exercici-list.component.scss',
})
export class ExerciciList {

  @Input() exercicis: Exercici[] = [];

  @Output() exerciciSeleccionat = new EventEmitter<Exercici>();

  public seleccionarExercici(exercici: Exercici): void {
    this.exerciciSeleccionat.emit(exercici);
  }
}
