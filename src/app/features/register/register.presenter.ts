import { Injectable } from "@angular/core";
import { ControlError } from 'src/app/shared/interfaces/error.interface';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { FormControlService } from "src/app/shared/utils/form-control/form-control.service";
import { debounceTime, distinctUntilChanged } from "rxjs";

@Injectable()
export class RegisterPresenter {
    userRegisterForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private formControlUtil: FormControlService
    ){
        this.userRegisterForm = this.formBuilder.group({
            dni:['',[
                  Validators.required,
                  Validators.minLength(8),
                  Validators.maxLength(8),
                  Validators.pattern("^[0-9]*$")
                ]],
              nombre: ['',[Validators.required]],
              apellido: ['',[Validators.required]],
              telefono: ['', [
                  Validators.required,
                  Validators.pattern('[- +()0-9]+')
                ]],
              edad: ['',[
                  Validators.min(17),
                  Validators.max(130),
                  Validators.pattern("^[0-9]*$") //->Personalizado
                ]],
              direccion: ['',[Validators.maxLength(40)]]
        });

        this.userRegisterForm.valueChanges
            .pipe(
                debounceTime(500),
                distinctUntilChanged()
            ).subscribe(value => {
                //->
            })
    }

    //------------------------------------
    get dniControl(): FormControl {
      return this.userRegisterForm.get('dni') as FormControl;
    }
  
    get isDniError(): boolean {
      return this.formControlUtil.isError(this.dniControl);
    }
  
    get dniErrors(): ValidationErrors | null {
      return this.dniControl.errors;
    }
  
    readonly dniErrorMessage: ControlError[] = [
      { validator: 'required', message: 'El dni es requerido'},
      { validator: 'maxlength', message: 'El dni como máximo puede tener 8 caracteres'},
      { validator: 'minlength', message: 'El dni como mínimo puede tener 8 caracteres'}
    ]
    //------------------------------------
    get nombreControl(): FormControl {
      return this.userRegisterForm.get('nombre') as FormControl;
    }
  
    get isNombreError(): boolean {
      return this.formControlUtil.isError(this.nombreControl);
    }
  
    get nombreErrors(): ValidationErrors | null {
      return this.nombreControl.errors;
    }
  
    readonly nombreErrorMessage: ControlError[] = [
      { validator: 'required', message: 'El nombre es requerido'}
    ]
    //------------------------------------
    get apellidoControl(): FormControl {
      return this.userRegisterForm.get('apellido') as FormControl;
    }
  
    get isApellidoError(): boolean {
      return this.formControlUtil.isError(this.apellidoControl);
    }
  
    get apellidoErrors(): ValidationErrors | null {
      return this.apellidoControl.errors;
    }
  
    readonly apellidoErrorMessage: ControlError[] = [
      { validator: 'required', message: 'El apellido es requerido'}
    ]
    //------------------------------------
    get telefonoControl(): FormControl {
      return this.userRegisterForm.get('telefono') as FormControl;
    }
  
    get isTelefonoError(): boolean {
      return this.formControlUtil.isError(this.telefonoControl);
    }
  
    get telefonoErrors(): ValidationErrors | null {
      return this.telefonoControl.errors;
    }
  
    readonly telefonoErrorMessage: ControlError[] = [
      { validator: 'required', message: 'El telefono es requerido'},
      { validator: 'pattern', message: 'El telefono no tiene el formato correcto'}
    ]
    //------------------------------------
    get edadControl(): FormControl {
      return this.userRegisterForm.get('edad') as FormControl;
    }
  
    get isEdadError(): boolean {
      return this.formControlUtil.isError(this.edadControl);
    }
  
    get edadErrors(): ValidationErrors | null {
      return this.edadControl.errors;
    }
  
    readonly edadErrorMessage: ControlError[] = [
      { validator: 'pattern', message: 'La edad no tiene el formato correcto'},
      { validator: 'min', message: 'La mímima edad es 17'},
      { validator: 'max', message: 'La máxima edad es 130'}
    ]
  
    //------------------------------------
    get direccionControl(): FormControl {
      return this.userRegisterForm.get('direccion') as FormControl;
    }
  
    get isDireccionError(): boolean {
      return this.formControlUtil.isError(this.direccionControl);
    }
  
    get direccionErrors(): ValidationErrors | null {
      return this.direccionControl.errors;
    }
  
    readonly direccionErrorMessage: ControlError[] = [
      { validator: 'maxlength', message: 'La dirección como máximo puede tener 40 caracteres'}
    ]
}