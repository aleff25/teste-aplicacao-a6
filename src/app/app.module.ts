import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AuthGuards } from './guards/auth.guards';
import { AuthLoginService } from './login/auth.login.service';
import { AplicacaoModule } from './shared/aplicacao.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AplicacaoModule,
    AppRoutingModule
  ],
  providers: [AuthGuards, AuthLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
