import { Component } from '@angular/core';
import { SimpleDataService } from '../../../core/services/simple-data/simple-data.service';

@Component({
  selector: 'report-grid',
  templateUrl: './report-grid.component.html',
})
export class ReportGridComponent {
  constructor(private service: SimpleDataService) {}

  public dataRows = this.service.resultsChange$;
}
