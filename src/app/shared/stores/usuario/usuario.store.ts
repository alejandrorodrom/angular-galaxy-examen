import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../interfaces/usuario.interface';
import { Store } from '../store';
import { reducerUser } from './usuario.reducer';
import { UsuarioState } from './usuario.state';

export const initialUserState: UsuarioState = {
  loaded: false,
  items: [],
  selected: undefined,
};

@Injectable({ providedIn: 'root' })
export class UsuarioStore extends Store<UsuarioState> {
  items$: Observable<Usuario[]> = this.select((state) => state.items);

  constructor() {
    super(initialUserState, reducerUser);
  }
}
