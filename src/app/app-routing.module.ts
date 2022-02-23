import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'simple-imperative-form',
    pathMatch: 'full',
  },
  {
    path: 'simple-imperative-form',
    loadChildren: async () => {
      const m = await import(
        './simple-imperative-form/simple-imperative-form.module'
      );
      return m.SimpleImperativeFormModule;
    },
  },
  {
    path: 'simple-reactive-form',
    loadChildren: async () => {
      const m = await import(
        './simple-reactive-form/simple-reactive-form.module'
      );
      return m.SimpleReactiveFormModule;
    },
  },
  {
    path: 'simple-report',
    loadChildren: async () => {
      const m = await import('./simple-report/simple-report.module');
      return m.SimpleReportModule;
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
