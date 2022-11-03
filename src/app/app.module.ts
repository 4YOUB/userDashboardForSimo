import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button'
import { MatSliderModule } from '@angular/material/slider'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CommandesComponent } from './pages/commandes/commandes.component';
import { CommandeComponent } from './components/commande/commande.component';
import { FormsModule } from '@angular/forms';
import { UserauthComponent } from './pages/userauth/userauth.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProfileComponent,
    CommandesComponent,
    CommandeComponent,
    UserauthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
