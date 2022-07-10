import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GridService } from 'src/app/shared/http/grid/grid.service';
import { UsuarioStore } from 'src/app/shared/stores/usuario/usuario.store';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  usuarios: {
    id: number;
    dni: string;
    nombre: string;
    apellidos: string;
    telefono: string;
    edad: number;
    direccion: string;
  }[] = [];

  constructor(
    private router: Router,
    private usuarioStore: UsuarioStore,
    private gridService: GridService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  redirectForm(): void {
    this.router.navigateByUrl('');
  }

  loadData(): void {
    this.usuarios = this.usuarioStore.state.items.map((item) => {
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
  }

  enviar(): void {
    this.gridService.enviar(this.usuarios).subscribe((res) => {
      console.log(res);
    });
  }
}
