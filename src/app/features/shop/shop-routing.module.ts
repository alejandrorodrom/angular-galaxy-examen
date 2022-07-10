import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './views/listado/listado.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'register',
    pathMatch:'full'
    
  },
  {
    path:'register',
    component:RegisterComponent
  },
  
  {
    path:'listado',
    component:ListadoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
