import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/form/form.module').then(m => m.FormModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./features/grid/grid.module').then(m => m.GridModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
