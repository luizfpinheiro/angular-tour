import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'link url'
  cursoAngular: boolean = true;
  urlImagem = 'https://www.stickersdevs.com.br/wp-content/uploads/2017/03/github-octocat-sticker-adesivo.png'
  
  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  nome: string = 'abc';

  valorInicial: number = 17;


  pessoa: any = {
    nome: 'def',
    idade: 20,

  }

  onMudouValor(evento){
    alert('Mudou!!!!')
  }

  getCurtirCurso(){
    return true;
  }

  getValor(){
    return 1;
  }

  botaoClicado(){
    alert('OK')
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual=(<HTMLInputElement>evento.target).value;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }


  constructor() { }

  ngOnInit() {
  }

}
