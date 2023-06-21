import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';
import { delay, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {


  produtos: IProduto[] = produtos;
  constructor() { }

  getAll() {
    return of(this.produtos).pipe(delay(200));
  }
  

  getOne(id: number) {
    return this.produtos.find(produto => produto.id === id);
  }

}
