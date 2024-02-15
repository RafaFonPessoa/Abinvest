import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CalcComponent } from './pages/calc/calc.component';
import { InforComponent } from './pages/infor/infor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalcComponent,
    InforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
