import { DrumsPercussionModule } from './components/drums-percussion/drums-percussion.module';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { HomeModule } from './components/home/home.module';

export const AppRoutes: Routes = [
  {
    path:'',
    children: [
      {
        path:'', redirectTo:'/home', pathMatch:'full'
      },
      {
        path:'home', loadChildren:() => import('./components/home/home.module').then((m => m.HomeModule))
      },
      // {
      //   path:'drums-percussion', loadChildren:() => import('./components/drums-percussion/drums-percussion.component').then((m) => m.DrumsPercussionModule)
      // },
      // {
      //   path:'drums-percussion', loadChildren:() => import('./components/home/home.component').then((m => m.HomeComponent))
      // }
    ]

  }
]
