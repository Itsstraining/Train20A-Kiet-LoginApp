import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LogInComponent } from './components/Sign-in/log-in/log-in.component';


import{MatInputModule} from '@angular/material/input'
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
     AngularFirestoreModule,
     MatToolbarModule,
     MatButtonModule,
     MatFormFieldModule,
     MatIconModule,
     MatInputModule,
     MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})   



export class AppModule { }
