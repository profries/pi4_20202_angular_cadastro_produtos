import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {

  mensagem = '';
  nome = '';
  nomes = [];
  constructor() { }

  ngOnInit(): void {
  }

  cadastrar() {
    this.nomes.push(this.nome);
    this.mensagem = this.nome + ' cadastrado com sucesso';
    this.nome = '';
  }

  // logar(event) {
  //   this.nome = event.target.value;
  // }

}
