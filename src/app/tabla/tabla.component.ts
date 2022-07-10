import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['dni', 'name', 'apellido', 'telefono', 'edad', 'direccion'];
 
  dataSource: {
    dni: number;
    name: string;
    apellido: string;
    telefono: number;
    edad: number;
    direccion: string;
  }[] = [];

  items: FormArray = this.formBuilder.array([]);
  form: FormGroup = this.formBuilder.group({ items: this.items });

  enviar(): void {
  }

  regresar(): void {
  }
}
