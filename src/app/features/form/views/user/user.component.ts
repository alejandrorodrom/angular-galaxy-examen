import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ControlError } from 'src/app/shared/interfaces/error.interface';
import { Usuario } from 'src/app/shared/interfaces/usuario.interface';
import { UsuarioAddAction } from 'src/app/shared/stores/usuario/usuario.actions';
import { UsuarioStore } from 'src/app/shared/stores/usuario/usuario.store';

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
      Validators.pattern('^[0-9]*$'),
    ]),
    nombre: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{3,6}$/
      ),
    ]),
    edad: new FormControl('', [
      Validators.required,
      Validators.min(17),
      Validators.max(130),
      Validators.pattern('^[0-9]*$'),
    ]),
    direccion: new FormControl('', [
      Validators.required,
      Validators.maxLength(40),
    ]),
  });

  get dniControl(): FormControl {
    return this.userRegisterForm.get('dni') as FormControl;
  }
  get nombreControl(): FormControl {
    return this.userRegisterForm.get('nombre') as FormControl;
  }
  get apellidosControl(): FormControl {
    return this.userRegisterForm.get('apellidos') as FormControl;
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
  get isApellidosError(): boolean {
    return (
      this.apellidosControl.invalid &&
      (this.apellidosControl.touched || this.apellidosControl.dirty)
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
  get apellidosErrors(): ValidationErrors | null {
    return this.apellidosControl.errors;
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
    { validator: 'pattern', message: 'El campo debe contener solo números' },
  ];
  readonly nombreErrorMessages: ControlError[] = [
    { validator: 'required', message: 'El campo es requerido' },
  ];
  readonly apellidosErrorMessages: ControlError[] = [
    { validator: 'required', message: 'El campo es requerido' },
  ];
  readonly telefonoErrorMessages: ControlError[] = [
    { validator: 'required', message: 'El campo es requerido' },
    {
      validator: 'pattern',
      message: 'El campo debe contener un número de teléfono',
    },
  ];
  readonly edadErrorMessages: ControlError[] = [
    { validator: 'required', message: 'El campo es requerido' },
    { validator: 'min', message: 'El campo debe ser mayor a 17' },
    { validator: 'max', message: 'El campo debe ser menor a 130' },
    { validator: 'pattern', message: 'El campo debe contener solo números' },
  ];
  readonly direccionErrorMessages: ControlError[] = [
    { validator: 'required', message: 'El campo es requerido' },
    {
      validator: 'maxlength',
      message: 'El campo debe tener un máximo de 40 caracteres',
    },
  ];

  constructor(private router: Router, private usuarioStore: UsuarioStore) {}

  ngOnInit(): void {}

  registrar(): void {
    const usuario = this.userRegisterForm.value as Usuario;
    this.usuarioStore.dispatch(new UsuarioAddAction({ item: usuario }));

    this.userRegisterForm.setValue({
      dni: '',
      nombre: '',
      apellidos: '',
      telefono: '',
      edad: '',
      direccion: '',
    });
    this.userRegisterForm.reset();
  }

  readirectGird(): void {
    this.router.navigateByUrl('/grid');
  }
}
