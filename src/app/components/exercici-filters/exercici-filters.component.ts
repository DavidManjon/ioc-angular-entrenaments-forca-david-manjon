import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercici-filters',
  imports: [FormsModule],
  templateUrl: './exercici-filters.component.html',
  styleUrl: './exercici-filters.component.scss',
})
export class ExerciciFilters {

  @Output() filtreCanviat = new EventEmitter<{ text: string; categoria: string }>();

  public textCerca: string = '';
  public categoriaSeleccionada: string = 'Totes';

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

  public aplicarFiltres(): void {
    this.filtreCanviat.emit({
      text: this.textCerca,
      categoria: this.categoriaSeleccionada
    });
  }

  public restablirFiltres(): void {
    this.textCerca = '';
    this.categoriaSeleccionada = 'Totes';

    this.filtreCanviat.emit({
      text: '',
      categoria: 'Totes'
    });
  }
}