
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Exercici } from '../../models/exercici.model';
import { CategoriaBadge } from '../categoria-badge/categoria-badge.component';

@Component({
  selector: 'app-exercici-card',
  imports: [CategoriaBadge],
  templateUrl: './exercici-card.component.html',
  styleUrl: './exercici-card.component.scss',
})
export class ExerciciCard {

  @Input() exercici!: Exercici;

  @Output() seleccionat = new EventEmitter<Exercici>();

  public seleccionar(): void {
    this.seleccionat.emit(this.exercici);
  }
}
