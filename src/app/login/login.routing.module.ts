import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginCondominoComponent } from './login-condomino/login-condomino.component';
import { LoginContadorComponent } from './login-contador/login-contador.component';


const loginRoutes: Routes = [
  {
    path: '', component: LoginComponent,
    children: [
      { path: 'login-condomino', component: LoginCondominoComponent },
      { path: 'login-contador', component: LoginContadorComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
