import { Routes } from "@angular/router";
import { StringInstrumentComponent } from "./string-instrument.component";
import { PurchaseStringInstrumentComponent } from "./purchase-string-instrument/purchase-string-instrument.component";
import { PurchaseStringInstrumentFormComponent } from "./purchase-string-instrument-form/purchase-string-instrument-form.component";


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
  },
  {
    path:'purchase:/id/form/:id',
    component: PurchaseStringInstrumentFormComponent
  },
  {
    path:'purchase:/id/form/:id/finished',
    component: PurchaseStringInstrumentFormComponent
  }
]
