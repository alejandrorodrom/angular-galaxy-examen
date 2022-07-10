import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { SuccessService } from 'src/app/shared/services/success.service';
import {  PersonFormPresenter } from './person.presenter';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers: [PersonFormPresenter]
})
export class PersonComponent {

  loading = false;

  constructor(
    // private contactService: ContactService,
    private successService: SuccessService,
    public presenter: PersonFormPresenter
  ) {
  }

  contactNow(): void {
    const body = {
      liscenceNumber: this.presenter.liscenceNumberControl.value,
      firstName: this.presenter.firstNameControl.value,
      lastName: this.presenter.lastNameControl.value,
      phone: this.presenter.phoneControl.value,
      yearOld : this.presenter.yearOldControl.value,
      address: this.presenter.addressControl.value
    };

    this.loading = true;
    // this.contactService.contactNow(body)
    //   .pipe(
    //     finalize(() => this.loading = false)
    //   )
    //   .subscribe({
    //     next: value => this.successService.showSuccess(value.message),
    //     error: error => {
    //       console.error(error)
    //     },
    //     complete: () => {
    //       this.presenter.personFormGroup.setValue({
    //         email: '',
    //         name: '',
    //         phone: ''
    //       });
    //       this.presenter.personFormGroup.reset();
    //     }
    //   })
  }


}
