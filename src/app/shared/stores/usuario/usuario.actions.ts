import { Usuario } from '../../interfaces/usuario.interface';
import { Action } from '../store';

export enum UsuarioActionTypes {
  SET_ALL = '[Usuario] Set All',
  ADD = '[Usuario] Add',
  UPDATE = '[Usuario] Update',
  SELECT = '[Usuario] Select',
  DELETE = '[Usuario] Delete',
}

export class UsuarioSetAllAction implements Action {
  readonly type = UsuarioActionTypes.SET_ALL;

  constructor(public payload: { items: Usuario[] }) {}
}
export class UsuarioAddAction implements Action {
  readonly type = UsuarioActionTypes.ADD;

  constructor(public payload: { item: Usuario }) {}
}
export class UsuarioUpdateAction implements Action {
  readonly type = UsuarioActionTypes.UPDATE;

  constructor(public payload: { id: number; item: Usuario }) {}
}
export class UsuarioSelectAction implements Action {
  readonly type = UsuarioActionTypes.SELECT;

  constructor(public payload: { id: number }) {}
}
export class UsuarioDeleteAction implements Action {
  readonly type = UsuarioActionTypes.DELETE;

  constructor(public payload: { id: number }) {}
}

export type UsuarioActions =
  | UsuarioSetAllAction
  | UsuarioAddAction
  | UsuarioUpdateAction
  | UsuarioSelectAction
  | UsuarioDeleteAction;
