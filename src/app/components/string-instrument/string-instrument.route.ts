import { Routes } from "@angular/router";
import { StringInstrumentComponent } from "./string-instrument.component";
import { PurchaseStringInstrumentComponent } from "./purchase-string-instrument/purchase-string-instrument.component";


export const stringInstrumentRoutes: Routes = [
  {
    path:'',
    component: StringInstrumentComponent
  },
  {
    path:'purchase',
    component: PurchaseStringInstrumentComponent
  },
  {
    path:'purchase:/id',
    component: PurchaseStringInstrumentComponent
  }
]
