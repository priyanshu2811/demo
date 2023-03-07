import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
  },
];

@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class DefaultModule { }
