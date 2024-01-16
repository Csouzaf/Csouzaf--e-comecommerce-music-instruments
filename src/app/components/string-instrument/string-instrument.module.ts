import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { stringInstrumentRoutes } from './string-instrument.route';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PurchaseStringInstrumentFormComponent } from './purchase-string-instrument-form/purchase-string-instrument-form.component';



@NgModule({
  declarations: [
    PurchaseStringInstrumentFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(stringInstrumentRoutes),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class StringInstrumentModule { }
