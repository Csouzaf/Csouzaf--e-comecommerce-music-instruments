import { Routes } from "@angular/router";
import { WindInstrumentComponent } from "./wind-instrument.component";
import { PurchaseWindInstrumentComponent } from "./purchase-wind-instrument/purchase-wind-instrument.component";
import { PurchaseWindInstrumentFormComponent } from "./purchase-wind-instrument-form/purchase-wind-instrument-form.component";


export const windInstrumentRoutes: Routes = [
  {
    path:'',
    component: WindInstrumentComponent
  },
  {
    path:'purchase',
    component: PurchaseWindInstrumentComponent
  },
  {
    path:'purchase:/id',
    component: PurchaseWindInstrumentComponent
  },
  {
    path:'purchase:/id/form/:id',
    component: PurchaseWindInstrumentFormComponent
  },
  {
    path:'purchase:/id/form/:id/finished',
    component: PurchaseWindInstrumentFormComponent
  }
]
