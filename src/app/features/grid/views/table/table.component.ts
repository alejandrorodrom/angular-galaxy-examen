import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioStore } from 'src/app/shared/stores/usuario/usuario.store';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'dni',
    'nombre',
    'apellidos',
    'telefono',
    'edad',
    'direccion',
  ];
  dataSource: {
    id: number;
    dni: string;
    nombre: string;
    apellidos: string;
    telefono: string;
    edad: number;
    direccion: string;
  }[] = [];

  constructor(private router: Router, private usuarioStore: UsuarioStore) {}

  ngOnInit(): void {
    this.loadData();
  }

  redirectForm(): void {
    this.router.navigateByUrl('');
  }

  loadData(): void {
    // console.log(this.usuarioStore.state.items);
    this.dataSource = this.usuarioStore.state.items.map((item) => {
      return {
        id: item.id,
        dni: item.dni,
        nombre: item.nombre,
        apellidos: item.apellidos,
        telefono: item.telefono,
        edad: item.edad,
        direccion: item.direccion,
      };
    });
    console.log(this.dataSource);
  }
}
