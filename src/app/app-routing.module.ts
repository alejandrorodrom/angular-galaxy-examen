import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./features/formulario/formulario.module').then(m => m.FormularioModule)
  },
  {
    path: 'tabla',
    loadChildren: () => import('./features/tabla/tabla.module').then(m => m.TablaModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
