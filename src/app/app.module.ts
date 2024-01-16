import { JwtInterceptor } from './../shared/interceptor/jwt.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { StringInstrumentComponent } from './components/string-instrument/string-instrument.component';
import { DrumsPercussionComponent } from './components/drums-percussion/drums-percussion.component';
import { PianoKeyboardComponent } from './components/piano-keyboard/piano-keyboard.component';
import { WindInstrumentComponent } from './components/wind-instrument/wind-instrument.component';
import { SoundBoxComponent } from './components/sound-box/sound-box.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    StringInstrumentComponent,
    DrumsPercussionComponent,
    PianoKeyboardComponent,
    WindInstrumentComponent,
    SoundBoxComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass:JwtInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
