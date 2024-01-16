import { PurchaseSoundBoxFormComponent } from './purchase-sound-box-form/purchase-sound-box-form.component';
import { Routes } from "@angular/router";
import { SoundBoxComponent } from "./sound-box.component";
import { PurchaseSoundBoxComponent } from "./purchase-sound-box/purchase-sound-box.component";


export const soundBoxRoutes: Routes = [
  {
    path:'',
    component: SoundBoxComponent
  },
  {
    path:'purchase',
    component: PurchaseSoundBoxComponent
  },
  {
    path:'purchase:/id',
    component: PurchaseSoundBoxComponent
  },
  {
    path:'purchase:/id/form/:id',
    component: PurchaseSoundBoxFormComponent
  },
  {
    path:'purchase:/id/form/:id/finished',
    component: PurchaseSoundBoxFormComponent
  }
]
