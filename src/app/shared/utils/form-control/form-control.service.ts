import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {
  isError(control: AbstractControl): boolean {
    //validar que exista && validar si es inválido && validar si fue tocado
    return control &&  control.invalid && (control.touched || control.dirty)
  }
  constructor() { }
}
