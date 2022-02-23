import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleReactiveFormComponent } from './simple-reactive-form.component';

const routes: Routes = [
  {
    path: '',
    component: SimpleReactiveFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimpleReactiveFormRoutingModule {}
