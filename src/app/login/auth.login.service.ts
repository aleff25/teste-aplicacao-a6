import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthLoginService {

  usuarioAutenticado = false;

  mostrarTelaMenu = new EventEmitter<boolean>();

  constructor(private router: Router) {

  }

  fazerLogin() {
    this.usuarioAutenticado = true;
    this.mostrarTelaMenu.emit(true);

    return true;
  }

}
