import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { UserComponent } from './views/user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlErrorComponent } from './control-error/control-error.component';


@NgModule({
  declarations: [
    UserComponent,
    ControlErrorComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
