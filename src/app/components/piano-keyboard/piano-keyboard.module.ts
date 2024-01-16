import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasePianoKeyboardComponent } from './purchase-piano-keyboard/purchase-piano-keyboard.component';
import { PianoKeyboardComponent } from './piano-keyboard.component';
import { RouterModule } from '@angular/router';
import { pianoKeyboardRoutes } from './piano-keyboard.route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PurchasePianoKeyboardFormComponent } from './purchase-piano-keyboard-form/purchase-piano-keyboard-form.component';



@NgModule({
  declarations: [
    PianoKeyboardComponent, PurchasePianoKeyboardComponent, PurchasePianoKeyboardFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pianoKeyboardRoutes),
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class PianoKeyboardModule { }
