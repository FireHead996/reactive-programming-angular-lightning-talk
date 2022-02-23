import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleReactiveFormComponent } from './simple-reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleReactiveFormRoutingModule } from './simple-reactive-form-routing.module';

@NgModule({
  declarations: [SimpleReactiveFormComponent],
  imports: [
    CommonModule,
    SimpleReactiveFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SimpleReactiveFormModule {}
