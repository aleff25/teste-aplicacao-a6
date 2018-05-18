import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { TelaLateralDireitaComponent } from './tela-lateral-direita/tela-lateral-direita.component';
import { TelaLateralEsquerdaComponent } from './tela-lateral-esquerda/tela-lateral-esquerda.component';
import { TelaLateralSuperiorComponent } from './tela-lateral-superior/tela-lateral-superior.component';
import { TelaLateralInferiorComponent } from './tela-lateral-inferior/tela-lateral-inferior.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [TelaPrincipalComponent, TelaLateralDireitaComponent, TelaLateralEsquerdaComponent, TelaLateralSuperiorComponent, TelaLateralInferiorComponent]
})
export class AplicacaoModule { }
