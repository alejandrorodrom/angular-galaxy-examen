import { UsuarioActions, UsuarioActionTypes } from './usuario.actions';
import { UsuarioState } from './usuario.state';

export const reducerUser = (state: UsuarioState, action: UsuarioActions) => {
  switch (action.type) {
    case UsuarioActionTypes.SET_ALL:
      return {
        ...state,
        items: action.payload.items,
        loaded: true,
      };
    case UsuarioActionTypes.ADD:
      return {
        ...state,
        items: [...state.items, action.payload.item],
      };
    case UsuarioActionTypes.UPDATE:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              ...action.payload.item,
            };
          }
          return item;
        }),
      };
    case UsuarioActionTypes.SELECT:
      return {
        ...state,
        selected: state.items.find((item) => item.id === action.payload.id),
      };
    case UsuarioActionTypes.DELETE:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
  }
};
