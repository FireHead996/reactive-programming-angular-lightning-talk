import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleImperativeFormComponent } from './simple-imperative-form.component';

const routes: Routes = [
  {
    path: '',
    component: SimpleImperativeFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimpleImperativeFormRoutingModule {}
