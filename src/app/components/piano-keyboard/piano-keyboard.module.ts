import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasePianoKeyboardComponent } from './purchase-piano-keyboard/purchase-piano-keyboard.component';
import { PianoKeyboardComponent } from './piano-keyboard.component';
import { RouterModule } from '@angular/router';
import { pianoKeyboardRoutes } from './piano-keyboard.route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PianoKeyboardComponent, PurchasePianoKeyboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pianoKeyboardRoutes),
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class PianoKeyboardModule { }
