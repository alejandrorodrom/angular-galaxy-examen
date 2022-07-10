import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'formulario', 
    loadChildren: () => import('./formulario/formulario.module').then(m => m.FormularioModule) 
  }, 
  { 
    path: 'tabla', 
    loadChildren: () => import('./tabla/tabla.module').then(m => m.TablaModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
