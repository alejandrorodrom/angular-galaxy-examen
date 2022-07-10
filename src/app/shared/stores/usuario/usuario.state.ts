import { Usuario } from '../../interfaces/usuario.interface';

export interface UsuarioState {
  items: Usuario[];
  selected: Usuario | undefined;
  loaded: boolean;
}
