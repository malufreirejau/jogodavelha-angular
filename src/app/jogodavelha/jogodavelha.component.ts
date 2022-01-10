import { Component, OnInit } from '@angular/core';

import { JogodavelhaService } from './shared';

@Component({
  selector: 'app-jogodavelha',
  templateUrl: './jogodavelha.component.html',
  styleUrls: ['./jogodavelha.component.css']
})
export class JogodavelhaComponent implements OnInit {

  constructor(private JogodavelhaService: JogodavelhaService) { }

  ngOnInit(): void {
    this.JogodavelhaService.inicializar();
  }

  get showInicio(): boolean {
    return this.JogodavelhaService.showInicio;
  }

  get showTabuleiro(): boolean {
    return this.JogodavelhaService.showTabuleiro;
  }

  get showFinal(): boolean{
    return this.JogodavelhaService.showFinal;
  }

  iniciarJogo(): void {
    this.JogodavelhaService.iniciarJogo();
  }

  jogar(posX: number, posY: number): void {
    this.JogodavelhaService.jogar(posX, posY);
  }

  exibirX(posX: number, posY: number): boolean {
    return this.JogodavelhaService.exibirX(posX, posY);
  }

  exibirO(posX: number, posY: number): boolean {
    return this.JogodavelhaService.exibirO(posX, posY);
  }

  exibirVitoria(posX: number, posY: number): boolean {
    return this.JogodavelhaService.exibirVitoria(posX, posY);
  }

  get jogador(): number {
    return this.JogodavelhaService.jogador;
  }

  novoJogo(): void {
    this.JogodavelhaService.novoJogo();
  }

}
