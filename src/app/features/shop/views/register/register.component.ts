import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ControlError } from 'src/app/shared/interfaces/error.interface';
import { FormControlService } from 'src/app/shared/utils/form-control.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  userRegisterForm = new FormGroup({
    dni: new FormControl(
      '',
      [
        Validators.required,
        Validators.maxLength(8)
      ]
    ),
    nombre: new FormControl(
      '',
      [
        Validators.required
      ]
    ),
    apellidos: new FormControl(
      '',
      [
        Validators.required
      ]
    ),
    telefono: new FormControl(
      '',
      [
        Validators.required
      ]
    )
    ,
    edad: new FormControl(
      '',
      [
        Validators.min(17),
        Validators.max(130)
      ]
    ),
    direccion: new FormControl(
      '',
      [
        
        Validators.maxLength(40)
      ]
    )
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
  get edadControl(): FormControl {
    return this.userRegisterForm.get('edad') as FormControl;
  }
  get telefonoControl(): FormControl {
    return this.userRegisterForm.get('telefono') as FormControl;
  }
  get direccionControl(): FormControl {
    return this.userRegisterForm.get('direccion') as FormControl;
  }
  get isDniError(): boolean {
    return this.formControlUtil.isError(this.dniControl);
  }
  get isnombreError(): boolean {
    return this.formControlUtil.isError(this.nombreControl);
  }
  get isapellidosError(): boolean {
    return this.formControlUtil.isError(this.apellidosControl);
  }
  get isedadError(): boolean {
    return this.formControlUtil.isError(this.edadControl);
  }
  get istelefonoError(): boolean {
    return this.formControlUtil.isError(this.telefonoControl);
  }
  get isdireccionError(): boolean {
    return this.formControlUtil.isError(this.direccionControl);
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
  get edadErrors(): ValidationErrors | null {
    return this.edadControl.errors;
  }
  get telefonoErrors(): ValidationErrors | null {
    return this.telefonoControl.errors;
  }
  get direccionErrors(): ValidationErrors | null {
    return this.direccionControl.errors;
  }
  
  get formErrors(): ValidationErrors | null {
    return this.userRegisterForm.errors;
  }
  readonly dniErrorMessage: ControlError[] = [
    { validator: 'required', message: 'El Dni es requerido' },
   
  ];
  readonly nombreErrorMessage: ControlError[] = [
    { validator: 'required', message: 'Los nombres son requerido' }
    
  ];
  readonly apellidosErrorMessage: ControlError[] = [
    { validator: 'required', message: 'Los apellidos son requerido' }
    
  ];
  readonly edadErrorMessage: ControlError[] = [
    { validator: 'required', message: 'La edad es requerido' },
    { validator: 'max', message: 'La edad como maximo puede tener 130 años' },
    { validator: 'min', message: 'La edad como minimo debe tener  17 años' }
  ];
  readonly telefonoErrorMessage: ControlError[] = [
   
    { validator: 'min', message: 'El telefono debe ser valido' }
  ];
  readonly direccionErrorMessage: ControlError[] = [
   
    { validator: 'maxlength', message: 'La direccion como maximo puede tener 40 caracteres '}
  ];

  constructor(
    private formControlUtil: FormControlService
  ) { }

}
