import { Routes } from "@angular/router";
import { DrumsPercussionComponent } from "./drums-percussion.component";
import { PurchaseDrumsPercussionComponent } from "./purchase-drums-percussion/purchase-drums-percussion.component";
import { PurchaseDrumsPercussionFormComponent } from "./purchase-drums-percussion-form/purchase-drums-percussion-form.component";


export const drumsPercussionRoutes: Routes = [
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
  },
  {
    path:'purchase:/id/form/:id',
    component: PurchaseDrumsPercussionFormComponent
  },
  {
    path:'purchase:/id/form/:id/finished',
    component: PurchaseDrumsPercussionFormComponent
  }
]
