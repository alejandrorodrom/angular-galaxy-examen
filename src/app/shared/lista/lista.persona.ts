import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ListaPersona{
  items$: Observable<Item[]> = this.select();

  constructor() {
  }
}
