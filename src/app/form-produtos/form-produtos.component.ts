import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {

  mensagem = '';
  produto = {id: 0, nome: '', preco: 0.0};
  produtos = [];
  constructor() { }

  ngOnInit(): void {
  }

  cadastrar() {
    this.produtos.push(this.produto);
    this.mensagem = this.produto.nome + ' cadastrado com sucesso';
    this.produto = {id: 0, nome: '', preco: 0.0};
  }

  // logar(event) {
  //   this.nome = event.target.value;
  // }

}
