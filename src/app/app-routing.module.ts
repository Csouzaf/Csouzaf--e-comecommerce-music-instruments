import { Routes } from '@angular/router';


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
      {
        path:'drums-percussion', loadChildren:() => import('./components/drums-percussion/drums-percussion.module').then((m) => m.DrumsPercussionModule)
      },
      {
        path:'piano-keyboard', loadChildren:() => import('./components/piano-keyboard/piano-keyboard.module').then((m) => m.PianoKeyboardModule)
      },
      {
        path:'sound-box', loadChildren:() => import('./components/sound-box/sound-box.module').then((m) => m.SoundBoxModule)
      },
      {
        path:'string-instrument', loadChildren:() => import('./components/string-instrument/string-instrument.module').then((m) => m.StringInstrumentModule)
      },
      {
        path:'wind-instrument', loadChildren:() => import('./components/wind-instrument/wind-instrument.module').then((m) => m.WindInstrumentModule)
      },

    ]

  }
]
