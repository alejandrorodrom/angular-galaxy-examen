import { Action } from "rxjs/internal/scheduler/Action";
import { Item } from "../interfaces/item.interface";

export enum PersonaType {
  SET_ALL = '[Cart] set all',
  ADD = '[Cart] add',
}

export class CartSelectAction implements Action {
    readonly type = PersonaType.SELECT;
    constructor(public payload: { id: number }) { }
}

export class CartAddAction implements Action {
    readonly type = PersonaType.ADD;
    constructor(public payload: { item: Item }) { }
}

export type CartActions =
  CartAddAction |
  CartSelectAction;