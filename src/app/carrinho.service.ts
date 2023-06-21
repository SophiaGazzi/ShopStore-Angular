import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: IProdutoCarrinho[] = [];
  constructor() { }

  getCart() {
    const cart = JSON.parse(localStorage.getItem("cart") || "");
    return cart;
  }

  addToCart(produto: IProdutoCarrinho) {
    this.itens.push(produto);
    return localStorage.setItem("cart", JSON.stringify(this.itens));

  }

  clearCart() {
    this.itens = [];
    localStorage.clear();
  }
}
