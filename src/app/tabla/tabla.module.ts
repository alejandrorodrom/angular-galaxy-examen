import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablaRoutingModule } from './tabla-routing.module';
import { TablaComponent } from './tabla.component';
import { ButtonModule } from '../components/button/button.module';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [
    TablaComponent
  ],
  imports: [
    CommonModule,
    TablaRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatBadgeModule,
  ]
})
export class TablaModule { }
