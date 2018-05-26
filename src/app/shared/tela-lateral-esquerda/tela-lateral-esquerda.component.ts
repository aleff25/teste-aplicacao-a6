import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-lateral-esquerda',
  templateUrl: './tela-lateral-esquerda.component.html',
  styleUrls: ['./tela-lateral-esquerda.component.css']
})
export class TelaLateralEsquerdaComponent implements OnInit {

  @Input() mostrarTelaEsquerda = false;
  botoes: any;

  constructor() {
    this.botoes = [
      { nome: 'TLE1', acao: 'O que fazer' },
      { nome: 'TLE2', acao: 'O que fazer' },
      { nome: 'TLE3', acao: 'O que fazer' },
      { nome: 'TLE4', acao: 'O que fazer' },
      { nome: 'TLE5', acao: 'O que fazer' },
    ];
  }

  ngOnInit() {
  }

  clicou(event, botao: any) {
    console.log(event, botao);
  }

}
