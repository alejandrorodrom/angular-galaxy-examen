import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonManagerRoutingModule } from './person-manager-routing.module';
import { PersonManagerComponent } from './person-manager.component';
import { PersonComponent } from './person/person.component';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { ControlErrorModule } from 'src/app/shared/components/control-error/control-error.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PersonManagerComponent,
    PersonComponent
  ],
  imports: [
    CommonModule,
    PersonManagerRoutingModule,
    InputModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ControlErrorModule
  ]
})
export class PersonManagerModule { }
