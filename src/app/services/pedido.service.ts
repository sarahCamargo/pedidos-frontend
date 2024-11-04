import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPedido } from '../interfaces/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiUrl = 'http://localhost:8080/pedido';

  constructor(private http: HttpClient) { }

  findAll(): Observable<IPedido[]> {
    return this.http.get<IPedido[]>(this.apiUrl);
  }

  findById(id: string): Observable<IPedido> {
    return this.http.get<IPedido>(`${this.apiUrl}/${id}`);
  }

  add(produto: IPedido): Observable<IPedido> {
    return this.http.post<IPedido>(this.apiUrl, produto);
  }

  update(produto: IPedido): Observable<IPedido> {
    return this.http.put<IPedido>(`${this.apiUrl}/${produto.id}`, produto);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
