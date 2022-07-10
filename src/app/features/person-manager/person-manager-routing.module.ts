import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonManagerComponent } from './person-manager.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  {
    path: '',
    component: PersonManagerComponent,
    children: [
      {
        path: 'person',
        component: PersonComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonManagerRoutingModule { }
