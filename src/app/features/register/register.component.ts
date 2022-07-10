import { Component, OnInit } from '@angular/core';
import { RegisterPresenter } from './register.presenter';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterPresenter]
})
export class RegisterComponent implements OnInit{
  
  loading = false;

  constructor(
    public presenter: RegisterPresenter
  ) { }

  register(): void {
    this.loading = true;

    this.presenter.userRegisterForm.setValue({
      dni: '',
      nombre: '',
      apellido: '',
      telefono: '',
      edad: '',
      direccion: ''
    });
    this.presenter.userRegisterForm.reset();
  }

  /*irLista(): void {
    this.router.navigateByUrl('/list');
  }*/

  ngOnInit(): void {
  }
}
