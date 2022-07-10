import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ControlError } from 'src/app/shared/interfaces/error.interface';
import { FormControlService } from 'src/app/shared/utils/form-control/form-control.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  /* DNI
Nombre
Apellidos
Teléfono
Edad
Dirección (Solo nombre de calle, número y distrito) */

  userRegisterForm = new FormGroup(
    {
      dni: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8)
        ]
      ),
      nombres: new FormControl(
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
      ),
      edad: new FormControl(
        '',
        [
          Validators.required,
          Validators.min(17),
          Validators.max(130)
        ]
      ),
      direccion: new FormControl(
        '',
        [
          Validators.required,
          Validators.maxLength(40)
        ]
      )
    }
  );

  // Se obtiene el detalle de cada uno de los controles
    get dniControl(): FormControl {
    return this.userRegisterForm.get('dni') as FormControl;
    }

    get nombresControl(): FormControl {
    return this.userRegisterForm.get('nombres') as FormControl;
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

    // Evaluar si mostrar o no el mensaje de error
    get isDniError(): boolean {
      return this.formControlUtil.isError(this.dniControl);
    }
    get isNombresError(): boolean {
      return this.formControlUtil.isError(this.nombresControl);
    }
    get isApellidosError(): boolean {
      return this.formControlUtil.isError(this.apellidosControl);
    }
    get isTelefonoError(): boolean {
      return this.formControlUtil.isError(this.telefonoControl);
    }
    get isEdadError(): boolean {
      return this.formControlUtil.isError(this.edadControl);
    }
    get isDireccionError(): boolean {
      return this.formControlUtil.isError(this.direccionControl);
    }

    // Lista de errores por control
    get dniErrors(): ValidationErrors | null {
      return this.dniControl.errors;
    }
    get nombresErrors(): ValidationErrors | null {
      return this.nombresControl.errors;
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


    readonly dniErrorMessage: ControlError[] = [
      { validator: 'required', message: 'El Dni es requerido' },
      { validator: 'maxlength', message: 'El DNI como máximo puede tener 8 caracteres' },
    { validator: 'minlength', message: 'El DNI como mínimo debe tener 5 caracteres' }
    ];

    readonly nombresErrorMessage: ControlError[] = [
      { validator: 'required', message: 'El Nombre es requerido' }
    ];
    readonly apellidosErrorMessage: ControlError[] = [
      { validator: 'required', message: 'Los Apellidos son requeridos' }
    ];
    readonly telefonoErrorMessage: ControlError[] = [
      { validator: 'required', message: 'El teléfono es requerido' }
    ];
    readonly edadErrorMessage: ControlError[] = [
      { validator: 'required', message: 'El teléfono es requerido' },
      { validator: 'max', message: 'La Edad como máximo puede ser 130' },
      { validator: 'min', message: 'La edad como mínimo puede ser 17' },
    ];
    readonly direccionErrorMessage: ControlError[] = [
      { validator: 'required', message: 'La dirección es requerida' },
      { validator: 'maxlength', message: 'La dirección como máximo puede tener 40 caracteres' }
    ];
    
  constructor(
    private formControlUtil: FormControlService,
   // private authService: AuthService,
    private router: Router
  ) { }

  register(): void {
    /*this.authService.register({ email: this.emailControl.value, password: this.passwordControl.value })
      .subscribe({
        next: () => {
          this.router.navigateByUrl('auth/login');
        },
        error: err => console.error(err)
      })*/
  }

}
