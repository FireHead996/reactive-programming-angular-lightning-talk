import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'simple-reactive-form',
  templateUrl: './simple-reactive-form.component.html',
})
export class SimpleReactiveFormComponent {
  reactiveForm = new FormGroup({
    firstInput: new FormControl(''),
    secondInput: new FormControl(''),
    thirdInput: new FormControl(''),
  });

  submitForm() {
    this.Object = this.reactiveForm.value;
  }

  Object = { firstInput: '', secondInput: '', thirdInput: '' };
}
