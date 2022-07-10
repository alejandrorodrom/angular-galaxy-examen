import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario.component';
import { ContactComponent } from './views/contact/contact.component';


const routes: Routes = [
  {
    path: '',
    component: FormularioComponent
  },
  {
    path: 'contact',
    component: ContactComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioRoutingModule { }
