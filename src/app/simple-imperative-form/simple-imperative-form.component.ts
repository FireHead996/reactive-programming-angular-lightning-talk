import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'simple-imperative-form',
  templateUrl: './simple-imperative-form.component.html',
})
export class SimpleImperativeFormComponent {
  simpleForm = new FormGroup({
    firstInput: new FormControl(''),
    secondInput: new FormControl(''),
    thirdInput: new FormControl(''),
  });

  submitForm() {
    this.Object = this.simpleForm.value;
  }

  Object = { firstInput: '', secondInput: '', thirdInput: '' };
}
