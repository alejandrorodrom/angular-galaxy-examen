import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablaRoutingModule } from './tabla-routing.module';
import { TablaComponent } from './tabla.component';
import { ButtonModule } from '../components/button/button.module';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    TablaComponent
  ],
  imports: [
    CommonModule,
    TablaRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TablaModule { }
