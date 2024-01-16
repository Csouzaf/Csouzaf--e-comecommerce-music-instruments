import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseWindInstrumentComponent } from './purchase-wind-instrument/purchase-wind-instrument.component';
import { PurchaseStringInstrumentComponent } from '../string-instrument/purchase-string-instrument/purchase-string-instrument.component';
import { WindInstrumentComponent } from './wind-instrument.component';
import { windInstrumentRoutes } from './wind-instrument.route';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PurchaseWindInstrumentFormComponent } from './purchase-wind-instrument-form/purchase-wind-instrument-form.component';



@NgModule({
  declarations: [
   WindInstrumentComponent, PurchaseWindInstrumentComponent, PurchaseWindInstrumentFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(windInstrumentRoutes),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class WindInstrumentModule { }
