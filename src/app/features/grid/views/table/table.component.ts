import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    dni: string;
    nombre: string;
    apellidos: string;
    telefono: string;
    edad: number;
    direccion: string;
  }[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectForm(): void {
    this.router.navigateByUrl('');
  }
}
