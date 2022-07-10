import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ControlError } from 'src/app/shared/interfaces/error.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userRegisterForm: FormGroup = new FormGroup({
    dni: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(8),
    ]),
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    edad: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
  });

  get dniControl(): FormControl {
    return this.userRegisterForm.get('dni') as FormControl;
  }
  get nombreControl(): FormControl {
    return this.userRegisterForm.get('nombre') as FormControl;
  }
  get apellidoControl(): FormControl {
    return this.userRegisterForm.get('apellido') as FormControl;
  }
  get telefonoControl(): FormControl {
    return this.userRegisterForm.get('telefono') as FormControl;
  }
  get edadControl(): FormControl {
    return this.userRegisterForm.get('edad') as FormControl;
  }
  get direccionControl(): FormControl {
    return this.userRegisterForm.get('direccion') as FormControl;
  }

  get isDniError(): boolean {
    return (
      this.dniControl.invalid &&
      (this.dniControl.touched || this.dniControl.dirty)
    );
  }
  get isNombreError(): boolean {
    return (
      this.nombreControl.invalid &&
      (this.nombreControl.touched || this.nombreControl.dirty)
    );
  }
  get isApellidoError(): boolean {
    return (
      this.apellidoControl.invalid &&
      (this.apellidoControl.touched || this.apellidoControl.dirty)
    );
  }
  get isTelefonoError(): boolean {
    return (
      this.telefonoControl.invalid &&
      (this.telefonoControl.touched || this.telefonoControl.dirty)
    );
  }
  get isEdadError(): boolean {
    return (
      this.edadControl.invalid &&
      (this.edadControl.touched || this.edadControl.dirty)
    );
  }
  get isDireccionError(): boolean {
    return (
      this.direccionControl.invalid &&
      (this.direccionControl.touched || this.direccionControl.dirty)
    );
  }

  get dniErrors(): ValidationErrors | null {
    return this.dniControl.errors;
  }
  get nombreErrors(): ValidationErrors | null {
    return this.nombreControl.errors;
  }
  get apellidoErrors(): ValidationErrors | null {
    return this.apellidoControl.errors;
  }
  get telefonoErrors(): ValidationErrors | null {
    return this.telefonoControl.errors;
  }
  get edadErrors(): ValidationErrors | null {
    return this.edadControl.errors;
  }
  get direccionErrors(): ValidationErrors | null {
    return this.direccionControl.errors;
  }

  readonly dniErrorMessages: ControlError[] = [
    { validator: 'required', message: 'El campo es requerido' },
    { validator: 'minlength', message: 'El campo debe tener 8 caracteres' },
    { validator: 'maxlength', message: 'El campo debe tener 8 caracteres' },
  ];
  readonly nombreErrorMessages: ControlError[] = [
    { validator: 'required', message: 'El campo es requerido' },
  ];
  readonly apellidoErrorMessages: ControlError[] = [
    { validator: 'required', message: 'El campo es requerido' },
  ];
  readonly telefonoErrorMessages: ControlError[] = [
    { validator: 'required', message: 'El campo es requerido' },
  ];
  readonly edadErrorMessages: ControlError[] = [
    { validator: 'required', message: 'El campo es requerido' },
  ];
  readonly direccionErrorMessages: ControlError[] = [
    { validator: 'required', message: 'El campo es requerido' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
