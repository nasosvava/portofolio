import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import {SkillsComponent} from "./skills/skills.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ResumeComponent,
    WorksComponent,
    ContactComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
