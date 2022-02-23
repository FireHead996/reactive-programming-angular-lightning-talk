import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleImperativeFormComponent } from './simple-imperative-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleImperativeFormRoutingModule } from './simple-imperative-form-routing.module';

@NgModule({
  declarations: [SimpleImperativeFormComponent],
  imports: [
    CommonModule,
    SimpleImperativeFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SimpleImperativeFormModule {}
