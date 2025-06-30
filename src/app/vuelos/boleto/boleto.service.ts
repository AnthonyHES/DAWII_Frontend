import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Boleto {
  id?: number;
  vuelo: any; // simplificado
  usuario: any;
  fechaCompra: string;
  asiento: string;
  precio: number;
}

@Injectable({
  providedIn: 'root'
})
export class BoletoService {
  private apiUrl = 'http://localhost:8080/api/boletos';

  constructor(private http: HttpClient) {}

  listarTodos(): Observable<Boleto[]> {
    return this.http.get<Boleto[]>(this.apiUrl);
  }

  obtener(id: number): Observable<Boleto> {
    return this.http.get<Boleto>(`${this.apiUrl}/${id}`);
  }

  crear(boleto: Boleto): Observable<Boleto> {
    return this.http.post<Boleto>(this.apiUrl, boleto);
  }

  actualizar(id: number, boleto: Boleto): Observable<Boleto> {
    return this.http.put<Boleto>(`${this.apiUrl}/${id}`, boleto);
  }

  cancelar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  misBoletos(): Observable<Boleto[]> {
    return this.http.get<Boleto[]>(`${this.apiUrl}/mios`);
  }
}
