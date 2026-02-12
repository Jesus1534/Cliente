import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contrasena',
  imports: [FormsModule, CommonModule],
  templateUrl: './contrasena.html',
  styleUrl: './contrasena.css',
})
export class Contrasena {

  longitud: number = 12;
  incluirMayusculas: boolean = true;
  incluirMinusculas: boolean = true;
  incluirNumeros: boolean = true;
  incluirSimbolos: boolean = false;
  contrasenaGenerada: string = '';
  copiada: boolean = false;

  generarContrasena() {
    let caracteres = '';

    if (this.incluirMayusculas) {
      caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (this.incluirMinusculas) {
      caracteres += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (this.incluirNumeros) {
      caracteres += '0123456789';
    }
    if (this.incluirSimbolos) {
      caracteres += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    }

    // Validar que al menos un tipo de carácter esté seleccionado
    if (caracteres === '') {
      this.contrasenaGenerada = 'Selecciona al menos una opción';
      return;
    }

    this.contrasenaGenerada = '';
    for (let i = 0; i < this.longitud; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      this.contrasenaGenerada += caracteres[indice];
    }

    this.copiada = false;
  }

  copiarAlPortapapeles() {
    if (this.contrasenaGenerada && !this.contrasenaGenerada.includes('Selecciona')) {
      navigator.clipboard.writeText(this.contrasenaGenerada).then(() => {
        this.copiada = true;
        setTimeout(() => {
          this.copiada = false;
        }, 2000);
      });
    }
  }

}
