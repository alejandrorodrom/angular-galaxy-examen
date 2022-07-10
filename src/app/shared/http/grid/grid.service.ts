import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root',
})
export class GridService {
  constructor(private http: HttpClient) {}

  enviar(usuarios: any[]): Observable<any> {
    console.log('servicio enviar', usuarios);
    return this.http.post('enviar', usuarios);
  }
}
