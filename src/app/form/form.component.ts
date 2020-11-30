import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class FormComponent {
  @ViewChild('myForm') subscribeForm: NgForm;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content): void {
    this.modalService.open(content);
  }

  clearForm(): void {
    this.subscribeForm.reset();
  }


}
