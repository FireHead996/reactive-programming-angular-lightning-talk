import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleReportComponent } from './simple-report.component';

const routes: Routes = [
  {
    path: '',
    component: SimpleReportComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimpleReportRoutingModule {}
