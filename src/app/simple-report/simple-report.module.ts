import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleReportComponent } from './simple-report.component';
import { ReportGridComponent } from './components/report-grid/report-grid.component';
import { ReportFormComponent } from './components/report-form/report-form.component';
import { SimpleReportRoutingModule } from './simple-report-routing.module';

@NgModule({
  declarations: [
    SimpleReportComponent,
    ReportFormComponent,
    ReportGridComponent,
  ],
  imports: [
    CommonModule,
    SimpleReportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SimpleReportModule {}
