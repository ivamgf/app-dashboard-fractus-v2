import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TermsComponent } from './pages/terms/terms.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddClassComponent } from './pages/add-class/add-class.component';
import { EditClassComponent } from './pages/edit-class/edit-class.component';
import { ExercisesComponent } from './pages/exercises/exercises.component';
import { TextsComponent } from './pages/texts/texts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TermsComponent,
    ContactComponent,
    AboutComponent,
    ProfileComponent,
    AddClassComponent,
    EditClassComponent,
    ExercisesComponent,
    TextsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
