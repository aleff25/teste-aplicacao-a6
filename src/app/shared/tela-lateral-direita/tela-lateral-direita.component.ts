import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tela-lateral-direita',
  templateUrl: './tela-lateral-direita.component.html',
  styleUrls: ['./tela-lateral-direita.component.css']
})
export class TelaLateralDireitaComponent implements OnInit {

  @Input() mostrarTelaDireita = false;
  botoes: any;

  constructor() {
    this.botoes = [
      { nome: 'TLD1', acao: 'O que fazer' },
      { nome: 'TLD2', acao: 'O que fazer' },
      { nome: 'TLD3', acao: 'O que fazer' },
      { nome: 'TLD4', acao: 'O que fazer' },
      { nome: 'TLD5', acao: 'O que fazer' },
    ];
  }

  ngOnInit() {
  }

  clicou(event, botao: any) {
    console.log(event, botao);
  }
}
