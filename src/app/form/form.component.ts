import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @ViewChild('myForm') subscribeForm: NgForm;

  constructor() { }

  onSubmit() {
    console.log(this.subscribeForm);
  }

  clearForm() {
    alert('Thank you ' + this.subscribeForm.form.value.username + ' for subscribing with ' + this.subscribeForm.form.value.email + ' adress!');
    this.subscribeForm.reset();

  }
}
