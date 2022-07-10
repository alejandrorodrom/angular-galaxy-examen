import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['dni', 'nombre', 'apellido', 'telefono', 'edad', 'direccion'];
  dataSource: {
    dni: string;
    nombre: string;
    apellido: string;
    telefono: string;
    edad: number;
    direccion: string;
  }[] = [];

  items: FormArray = this.formBuilder.array([]);
  form: FormGroup = this.formBuilder.group({ items: this.items });

  total = 0;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataSource = this.store.selectSnapshot(state => state.cart.items).map(
      (item: { 
        dni: string;
        nombre: string;
        apellido: string;
        telefono: string;
        edad: number;
        direccion: string;
      }) => {
          return {
            dni: item.dni,
            nombre: item.nombre,
            apellido: item.apellido,
            telefono: item.telefono,
            edad: item.edad,
            doreccion: item.direccion
          }
    });
  }

}
