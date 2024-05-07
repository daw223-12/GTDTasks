import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-task-horizontal-grouper',
  templateUrl: './task-horizontal-grouper.component.html',
  styleUrls: ['./task-horizontal-grouper.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0)' // Elemento en su posición original
      })),
      state('out', style({
        transform: 'translateX(100%)' // Elemento desplazado hacia la derecha (100% del ancho del contenedor)
      })),
      transition('in => out', animate('500ms ease-in-out')),
      transition('out => in', animate('500ms ease-in-out'))
    ])
  ]
})
export class TaskHorizontalGrouperComponent {
  state: string = 'in'; // Estado inicial de la animación
  
  toggleState() {
    this.state = this.state === 'in' ? 'out' : 'in'; // Cambia el estado para iniciar la animación
  }
}
