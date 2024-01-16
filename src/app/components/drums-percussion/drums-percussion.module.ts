import { NgModule } from '@angular/core';
import { PurchaseDrumsPercussionComponent } from './purchase-drums-percussion/purchase-drums-percussion.component';
import { DrumsPercussionComponent } from './drums-percussion.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { drumsPercussionRoutes } from './drums-percussion.router';


@NgModule({
  declarations: [
    PurchaseDrumsPercussionComponent, DrumsPercussionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(drumsPercussionRoutes),
  ]
})
export class DrumsPercussionModule { }
