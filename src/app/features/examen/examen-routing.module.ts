import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamenComponent } from './examen.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
{
  path: '',
  component: ExamenComponent,
  //canActivate: [AuthGuard],
  //canActivateChild: [AuthChildGuard],
  children: [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      //canDeactivate: [AuthDeactivateGuard],
      component: HomeComponent,
    }
  ]
}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamenRoutingModule { }
