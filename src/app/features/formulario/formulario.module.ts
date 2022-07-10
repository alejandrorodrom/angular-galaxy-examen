import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { FormularioComponent } from './formulario.component';
import { ContactComponent } from './views/contact/contact.component';
import { ContactFormComponent } from './views/contact/components/contact-form/contact-form.component';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { ModalSuccessComponent } from './views/contact/components/modal-success/modal-success.component';


@NgModule({
  declarations: [
    FormularioComponent,
    ContactComponent,
    ContactFormComponent,
    ModalSuccessComponent
  ],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    InputModule
  ]
})
export class FormularioModule { }
