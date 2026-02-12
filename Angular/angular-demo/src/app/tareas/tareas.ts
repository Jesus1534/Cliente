import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';

interface Tarea {
  id: number;
  texto: string;
  completada: boolean;
}

@Component({
  selector: 'app-tareas',
  imports: [FormsModule, CommonModule],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas implements OnInit {

  tareas: Tarea[] = [];
  nuevaTarea: string = '';
  contadorId: number = 0;
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.cargarTareas();
    }
  }

  cargarTareas() {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
      this.tareas = JSON.parse(tareasGuardadas);
      // Obtener el ID máximo para continuar desde ahí
      if (this.tareas.length > 0) {
        this.contadorId = Math.max(...this.tareas.map(t => t.id)) + 1;
      }
    }
  }

  guardarTareas() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('tareas', JSON.stringify(this.tareas));
    }
  }

  agregarTarea() {
    if (this.nuevaTarea.trim()) {
      const tarea: Tarea = {
        id: this.contadorId++,
        texto: this.nuevaTarea.trim(),
        completada: false
      };
      this.tareas.push(tarea);
      this.nuevaTarea = '';
      this.guardarTareas();
    }
  }

  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter(t => t.id !== id);
    this.guardarTareas();
  }

  marcarCompletada(id: number) {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.completada = !tarea.completada;
      this.guardarTareas();
    }
  }

  get contadorTareas(): number {
    return this.tareas.length;
  }

  get tareasCompletadas(): number {
    return this.tareas.filter(t => t.completada).length;
  }

}
