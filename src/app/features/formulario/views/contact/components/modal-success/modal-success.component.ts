import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SuccessService } from 'src/app/shared/services/success/success.service';

@Component({
  selector: 'app-modal-success',
  templateUrl: './modal-success.component.html',
  styleUrls: ['./modal-success.component.css']
})
export class ModalSuccessComponent implements OnInit {
  message = '';

  @ViewChild('modal') modal!: ElementRef;

  constructor(private successService: SuccessService) { }

  ngOnInit(): void {
    this.successService.successSubject.subscribe((value: string) => {
      this.message = value;
      //this.openModal();
    })
  }

}
