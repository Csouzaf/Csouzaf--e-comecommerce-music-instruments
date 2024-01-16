import { Routes } from "@angular/router";
import { WindInstrumentComponent } from "./wind-instrument.component";
import { PurchaseWindInstrumentComponent } from "./purchase-wind-instrument/purchase-wind-instrument.component";


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
  }
]
