import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProdutoServico } from '../interfaces/produto-servico';

@Injectable({
  providedIn: 'root'
})
export class ProdutoServicoService {

  private apiUrl = 'http://localhost:8080/produto-servico';

  constructor(private http: HttpClient) { }

  findAll(): Observable<IProdutoServico[]> {
    return this.http.get<IProdutoServico[]>(this.apiUrl);
  }

  findById(id: string): Observable<IProdutoServico> {
    return this.http.get<IProdutoServico>(`${this.apiUrl}/${id}`);
  }

  add(produto: IProdutoServico): Observable<IProdutoServico> {
    return this.http.post<IProdutoServico>(this.apiUrl, produto);
  }

  update(produto: IProdutoServico): Observable<IProdutoServico> {
    return this.http.put<IProdutoServico>(`${this.apiUrl}/${produto.id}`, produto);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}