import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AvisComponent } from './avis/avis.component';
import { AgenceComponent } from './agence/agence.component';
import { ServicesComponent } from './services/services.component';
import { FaqComponent } from './faq/faq.component';
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

@NgModule({
  declarations: [
    AppComponent,
    Navbar1Component,
    Navbar2Component,
    HomeComponent,
    FooterComponent,
    AvisComponent,
    AgenceComponent,
    ServicesComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
