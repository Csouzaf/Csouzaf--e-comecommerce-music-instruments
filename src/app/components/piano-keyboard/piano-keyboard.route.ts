import { Routes } from "@angular/router";
import { DrumsPercussionComponent } from "../drums-percussion/drums-percussion.component";
import { PurchaseDrumsPercussionComponent } from "../drums-percussion/purchase-drums-percussion/purchase-drums-percussion.component";


export const pianoKeyboardRoutes: Routes = [
  {
    path:'',
    component: DrumsPercussionComponent
  },
  {
    path:'purchase',
    component: PurchaseDrumsPercussionComponent
  },
  {
    path:'purchase:/id',
    component: PurchaseDrumsPercussionComponent
  }
]
