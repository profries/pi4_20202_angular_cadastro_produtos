import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {
@Input() nome: string;

  produtos = [
    {id: 1, nome: 'Prod1', preco: 10},
    {id: 2, nome: 'Prod2', preco: 20},
    {id: 3, nome: 'Prod3', preco: 30},
    {id: 4, nome: 'Prod4', preco: 40},
    {id: 5, nome: 'Prod5', preco: 50},
    {id: 6, nome: 'Prod6', preco: 60},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
