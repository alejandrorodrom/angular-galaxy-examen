import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UtilsService } from '../utils.service'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{

  userFormGroup: FormGroup;

  get emailControl(): FormControl {
    return this.userFormGroup.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.userFormGroup.get('password') as FormControl;
  }


  get isEmailError(): boolean {
    return this.formControlUtil.isError(this.emailControl);
  }

  get isPasswordError(): boolean {
    return this.formControlUtil.isError(this.passwordControl);
  }


  get emailErrors(): ValidationErrors | null {
    return this.emailControl.errors;
  }

  get passwordErrors(): ValidationErrors | null {
    return this.passwordControl.errors;
  }



  constructor(
    private formBuilder: FormBuilder,
    private formControlUtil: UtilsService,
  ) {
    this.userFormGroup = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(4)
        ]
      ]
    })
  }

  Registrar(): void {
    // this.authService.Registrar(this.userFormGroup.value)
    //   .subscribe({
    //     next: value => {
    //       this.userService.create(value.token);
    //       this.router.navigateByUrl('home');
    //     },
    //     error: err => console.error(err)
    //   })
  }

}
