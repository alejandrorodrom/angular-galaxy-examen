import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Item } from '../../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(
    private store: Store
  ) { }

  addPersonaNgxs(item: Item): void {
    this.store.dispatch(new CartAddActionNgxs({ item: item }));
  }
}
