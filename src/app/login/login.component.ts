import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from './auth.login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mostrarLogin: boolean;

  constructor(private _loginService: AuthLoginService,
              private _router: Router) {
  }

  ngOnInit() {

    this._loginService.mostrarTelaMenu.subscribe(mostrar => this.mostrarLogin = mostrar);
  }

  fazerLogin() {
    if (this._loginService.fazerLogin()) {
      this._router.navigate(['/login/login-contador']);
    }
    console.log('OLasdausgbdasd');
  }
}
