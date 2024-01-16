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
  }
]
