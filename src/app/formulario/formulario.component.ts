import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
  }

  userRegisterForm = new FormGroup({
    dni: new FormControl(
      '',
      [
        Validators.required,
        Validators.pattern('/^[0-9]$/'),
        Validators.minLength(8),
        Validators.maxLength(8)
      ]
    ),
    name: new FormControl(
      '',
      [
        Validators.required
      ]
    ),
    apellido: new FormControl(
      '',
      [
        Validators.required
      ]
    ),telefono: new FormControl(
      '',
      [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')
      ]
    ),
    edad: new FormControl(
      '',
      [
        Validators.required,
        Validators.pattern('/^[0-9]{1,2}$/'),
        Validators.minLength(17),
        Validators.maxLength(130)
      ]
    ),
    direccion: new FormControl(
      '',
      [
        Validators.maxLength(40)
      ]
    )
  });


  register(): void {

    //LIMPIAR FORMULARIO SI NO ERROR
    this.userRegisterForm.reset();
  }

}
