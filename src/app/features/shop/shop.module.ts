import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopRoutingModule } from './shop-routing.module';
import { RegisterComponent } from './views/register/register.component';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { ControlErrorModule } from 'src/app/shared/components/control-error/control-error.module';
import { ButtonModule } from 'src/app/shared/components/button/button/button.module';
import { ListadoComponent } from './views/listado/listado.component';


@NgModule({
  declarations: [
    RegisterComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    InputModule,
    FormsModule,
    ReactiveFormsModule,
    ControlErrorModule,
    ButtonModule
  ]
})
export class ShopModule { }
