import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume/resume.component';
import { HeaderComponent } from './component/header/header.component';
import { SummaryComponent } from './component/summary/summary.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { EducationComponent } from './component/education/education.component';
import { SkillsComponent } from './component/skills/skills.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParticlesModule } from 'angular-particle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    HeaderComponent,
    SummaryComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
