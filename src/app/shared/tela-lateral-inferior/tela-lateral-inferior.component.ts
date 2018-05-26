import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-lateral-inferior',
  templateUrl: './tela-lateral-inferior.component.html',
  styleUrls: ['./tela-lateral-inferior.component.css']
})
export class TelaLateralInferiorComponent implements OnInit {

  @Input() mostrarTelaInferior = false;
  botoes: any;

  constructor() {
    this.botoes = [
      { nome: 'TLI1', acao: 'O que fazer' },
      { nome: 'TLI2', acao: 'O que fazer' },
      { nome: 'TLI3', acao: 'O que fazer' },
      { nome: 'TLI4', acao: 'O que fazer' },
      { nome: 'TLI5', acao: 'O que fazer' },
    ];
  }

  ngOnInit() {
  }

  clicou(event, botao: any) {
    console.log(event, botao);
  }

}
