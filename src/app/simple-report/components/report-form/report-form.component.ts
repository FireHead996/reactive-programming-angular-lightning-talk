import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SimpleDataService } from '../../../core/services/simple-data/simple-data.service';

@Component({
  selector: 'report-form',
  templateUrl: './report-form.component.html',
})
export class ReportFormComponent {
  constructor(private service: SimpleDataService) {}

  form = new FormGroup({
    firstInput: new FormControl(''),
    secondInput: new FormControl(''),
    thirdInput: new FormControl(''),
  });

  submitForm() {
    this.service.addDataRow(this.form.value);
    this.form.reset();
  }
}
