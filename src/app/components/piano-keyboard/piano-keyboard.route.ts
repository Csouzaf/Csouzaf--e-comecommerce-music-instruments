import { Routes } from "@angular/router";
import { PurchasePianoKeyboardComponent } from "../piano-keyboard/purchase-piano-keyboard/purchase-piano-keyboard.component"
import { PurchasePianoKeyboardFormComponent } from "./purchase-piano-keyboard-form/purchase-piano-keyboard-form.component";
import { PianoKeyboardComponent } from "./piano-keyboard.component";


export const pianoKeyboardRoutes: Routes = [
  {
    path:'',
    component: PianoKeyboardComponent
  },
  {
    path:'purchase',
    component: PurchasePianoKeyboardComponent
  },
  {
    path:'purchase:/id',
    component: PurchasePianoKeyboardComponent
  },
  {
    path:'purchase:/id/form/:id',
    component: PurchasePianoKeyboardFormComponent
  },
  {
    path:'purchase:/id/form/:id/finished',
    component: PurchasePianoKeyboardFormComponent
  }
]
