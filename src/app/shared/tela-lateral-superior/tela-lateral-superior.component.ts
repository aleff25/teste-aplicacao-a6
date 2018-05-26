import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-lateral-superior',
  templateUrl: './tela-lateral-superior.component.html',
  styleUrls: ['./tela-lateral-superior.component.css']
})
export class TelaLateralSuperiorComponent implements OnInit {

  @Input() mostrarTelaSuperior = false;
  botoes: any;

  constructor() {
    this.botoes = [
      { nome: 'TLS1', acao: 'O que fazer' },
      { nome: 'TLS2', acao: 'O que fazer' },
      { nome: 'TLS3', acao: 'O que fazer' },
      { nome: 'TLS4', acao: 'O que fazer' },
      { nome: 'TLS5', acao: 'O que fazer' },
    ];
  }

  ngOnInit() {
  }

  clicou(event, botao: any) {
    console.log(event, botao);
  }
}
