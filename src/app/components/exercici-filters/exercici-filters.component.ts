
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercici-filters',
  imports: [],
  templateUrl: './exercici-filters.component.html',
  styleUrl: './exercici-filters.component.scss',
})
export class ExerciciFilters {

  @Output() filtreCanviat = new EventEmitter<string>();

  public categories: string[] = [
    'Totes',
    'Cames',
    'Pit',
    'Esquena',
    'Esquena i cames',
    'Espatlles',
    'Braços',
    'Abdominals'
  ];

  public seleccionarCategoria(categoria: string): void {
    this.filtreCanviat.emit(categoria);
  }
}
