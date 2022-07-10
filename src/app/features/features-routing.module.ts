import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { TablaComponent } from './tabla/tabla.component';

const routes: Routes = [
{
  path:'',
  component:FormularioComponent,
  // canActivate: [FormularioComponent],
  // canActivateChild:[FormularioComponent]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
