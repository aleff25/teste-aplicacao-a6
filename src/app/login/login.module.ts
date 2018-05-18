import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContadorComponent } from './login-contador/login-contador.component';
import { LoginCondominoComponent } from './login-condomino/login-condomino.component';
import { LoginRoutingModule } from './login.routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AuthLoginService } from './auth.login.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports: [],
  declarations: [
    LoginComponent,
    LoginCondominoComponent,
    LoginContadorComponent
  ],
  providers: []
})
export class LoginModule { }
