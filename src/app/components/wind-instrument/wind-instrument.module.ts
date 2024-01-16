import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseWindInstrumentComponent } from './purchase-wind-instrument/purchase-wind-instrument.component';
import { PurchaseStringInstrumentComponent } from '../string-instrument/purchase-string-instrument/purchase-string-instrument.component';



@NgModule({
  declarations: [
    PurchaseWindInstrumentComponent,
    PurchaseStringInstrumentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WindInstrumentModule { }
