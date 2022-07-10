import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamenRoutingModule } from './examen-routing.module';
import { ExamenComponent } from './examen.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './views/home/home.component';


@NgModule({
  declarations: [
    ExamenComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ExamenRoutingModule
  ]
})
export class ExamenModule { }
