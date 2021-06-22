import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';

import { CountryService } from './country.service';
import { DetailComponent } from './components/detail/detail.component';
import { DataTransformPipe } from './data-transform.pipe';

@NgModule({
  declarations: [AppComponent, NavbarComponent, MainComponent, DetailComponent, DataTransformPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CountryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
