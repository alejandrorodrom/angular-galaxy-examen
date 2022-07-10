import { Injectable } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { Store } from "@ngxs/store";
import { ControlError } from "src/app/shared/interfaces/error";
import { FormControlService } from "src/app/shared/utils/from-control.service";
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { PersonSetAllActionNgxs } from "src/app/shared/stores/person-ngxs/person-ngxs.action";

@Injectable()
export class PersonFormPresenter{
    personFormGroup: FormGroup;

  get liscenceNumberControl(): FormControl {
    return this.personFormGroup.get('liscenceNumber') as FormControl;
  }

  get firstNameControl(): FormControl {
    return this.personFormGroup.get('firstName') as FormControl;
  }

  get lastNameControl(): FormControl {
    return this.personFormGroup.get('lastName') as FormControl;
  }

  get phoneControl(): FormControl {
    return this.personFormGroup.get('phone') as FormControl;
  }

  get yearOldControl(): FormControl {
    return this.personFormGroup.get('yearOld') as FormControl;
  }

  get addressControl(): FormControl {
    return this.personFormGroup.get('address') as FormControl;
  }

  get isLiscenceNumberError(): boolean {
    return this.formControlService.isError(this.liscenceNumberControl);
  }

  get isFirstNameError(): boolean {
    return this.formControlService.isError(this.firstNameControl);
  }

  get isLastNameError(): boolean {
    return this.formControlService.isError(this.lastNameControl);
  }

  get isPhoneError(): boolean {
    return this.formControlService.isError(this.phoneControl);
  }

  get isYearOldError(): boolean {
    return this.formControlService.isError(this.yearOldControl);
  }

  get isAddressError(): boolean {
    return this.formControlService.isError(this.addressControl);
  }


  get liscenceNumberErrors(): ValidationErrors | null {
    return this.liscenceNumberControl.errors;
  }

  get firstNameErrors(): ValidationErrors | null {
    return this.firstNameControl.errors;
  }

  get lastNameErrors(): ValidationErrors | null {
    return this.lastNameControl.errors;
  }

  get phoneErrors(): ValidationErrors | null {
    return this.phoneControl.errors;
  }

  get yearOldErrors(): ValidationErrors | null {
    return this.yearOldControl.errors;
  }

  get addressErrors(): ValidationErrors | null {
    return this.addressControl.errors;
  }


  readonly liscenceNumberErrorMessage: ControlError[] = [
    {validator: 'required', message: 'El DNI es obligatorio'},
    {validator: 'maxlength', message: 'El telefono tiene como maximo 8 digitos'},
    {validator: 'minlength', message: 'El telefono tiene como minimo 8 digitos'},
  ];

  readonly firstNameErrorMessage: ControlError[] = [
    {validator: 'required', message: 'El nombre es obligatorio'}
  ];

  readonly lastNameErrorMessage: ControlError[] = [
    {validator: 'required', message: 'El apellido es obligatorio'}
  ];

  readonly phoneErrorMessage: ControlError[] = [
    {validator: 'required', message: 'El telefono es obligatorio'},
    {validator: 'maxlength', message: 'El telefono tiene como maximo 13 digitos'},
    {validator: 'minlength', message: 'El telefono tiene como minimo 7 digitos'},
    {validator: 'pattern', message: 'El telefono es invalido'}
  ];

  readonly yearOldErrorMessage: ControlError[] = [
    {validator: 'required', message: 'La edad es obligatorio'},
    {validator: 'maxlength', message: 'Edad maximo 130 años'},
    {validator: 'minlength', message: 'Edad minimo 17 años'},
  ];

  readonly addressErrorMessage: ControlError[] = [
    {validator: 'required', message: 'La dirección es obligatorio'},
    {validator: 'maxlength', message: 'La dirección tiene como maximo 40 caracteres'},
  ];

  constructor(
    private formBuilder: FormBuilder,
    private formControlService: FormControlService,
    // private contactStore: ContactStore,
    private store: Store
  ) {
    this.personFormGroup = this.formBuilder.group({
      liscenceNumber: ['', [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(8),
      ]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [
        Validators.required,
        Validators.maxLength(13),
        Validators.minLength(7),
        Validators.pattern(/^\x2b[0-9, $]*$/)
      ]],
      yearOld: ['',[
        Validators.required,
        Validators.maxLength(130),
        Validators.minLength(17),
      ]],
      address: ['', [
        Validators.required,
        Validators.maxLength(40),
      ]]
    });

    // this.contactFormGroup.setValue({
    //   name: this.contactStore.state.name,
    //   email: this.contactStore.state.email,
    //   phone: this.contactStore.state.phone
    // });

    // this.contactFormGroup.setValue({
    //   name: this.store.selectSnapshot(state => state.contact.name),
    //   email: this.store.selectSnapshot(state => state.contact.email),
    //   phone: this.store.selectSnapshot(state => state.contact.phone)
    // });

    // console.log(this.store.selectSnapshot(state => state));

    this.personFormGroup.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.store.dispatch(new PersonSetAllActionNgxs(value));
      });
  }

  expireEvent(): void {
    console.log('Expiro');
  }

  successEvent(): void {
    console.log('Todo correcto');
  }
}