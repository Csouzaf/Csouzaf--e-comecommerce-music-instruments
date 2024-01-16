import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { stringInstrumentRoutes } from './string-instrument.route';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(stringInstrumentRoutes),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class StringInstrumentModule { }
