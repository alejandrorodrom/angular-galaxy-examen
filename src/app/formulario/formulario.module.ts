import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { FormularioComponent } from './formulario.component';

import { InputModule } from '../components/input/input.module';
import { ButtonModule } from '../components/button/button.module';
import { TitleModule } from '../components/title/title.module';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    FormularioComponent,
  ],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    InputModule,
    ButtonModule,
    TitleModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormularioModule { }
