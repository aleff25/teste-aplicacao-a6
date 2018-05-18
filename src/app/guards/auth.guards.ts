import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/index';
import { AuthLoginService } from '../login/auth.login.service';

@Injectable()
export class AuthGuards implements CanActivate {

  constructor(private authLoginService: AuthLoginService,
              private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.verificarAcesso();
  }


  private verificarAcesso() {
    if ( this.authLoginService.usuarioAutenticado) {
      return true;
    }

    console.log('logando');
    this.router.navigate(['/login']);
    return false;
  }
}
